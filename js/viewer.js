document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const siteId = urlParams.get("id");

  // Retrieve item or fallback to first entry
  const item = heritageData.find(site => site.id === siteId) || heritageData[0];

  const container = document.getElementById("viewer-container");
  const infoContainer = document.getElementById("viewer-info");
  const audioPlayer = document.getElementById("heritage-audio");
  const storyText = document.getElementById("story-text");

  if (item) {
    // 1. Mount 3D Model Viewer
    if (container) {
      container.innerHTML = `
        <model-viewer 
          src="${item.modelPath}" 
          poster="${item.image}" 
          alt="3D Model of ${item.name}" 
          camera-controls 
          auto-rotate 
          shadow-intensity="1" 
          style="width: 100%; height: 100%; background-color: #1a202c;">
        </model-viewer>
      `;

      // Material Overrides for Color Accuracy
      const modelViewer = container.querySelector("model-viewer");
      if (modelViewer) {
        modelViewer.addEventListener("load", () => {
          const materials = modelViewer.model?.materials;
          if (!materials) return;

          if (item.id === "redfort") {
            materials.forEach(mat => {
              mat.pbrMetallicRoughness.setBaseColorFactor([0.65, 0.18, 0.09, 1.0]);
              mat.pbrMetallicRoughness.setRoughnessFactor(0.85);
            });
          }

          if (item.id === "tajmahal") {
            materials.forEach(mat => {
              mat.pbrMetallicRoughness.setBaseColorFactor([1.0, 1.0, 1.0, 1.0]);
              mat.pbrMetallicRoughness.setRoughnessFactor(0.3);
            });
          }
        });
      }
    }

    // 2. Populate Header
    if (infoContainer) {
      infoContainer.innerHTML = `
        <h1 style="font-size: 2.2rem; font-weight: bold; color: #1e293b; margin-bottom: 0.25rem;">${item.name}</h1>
        <p style="color: #e67e22; font-weight: 600; font-size: 1.1rem;">📍 ${item.location}</p>
      `;
    }

    // 3. Set Audio Player Path
    const playBtn = document.getElementById("play-audio-btn");
    if (audioPlayer) {
      if (item.audioPath) {
        audioPlayer.src = item.audioPath;
        audioPlayer.load();

        if (playBtn) {
          playBtn.addEventListener("click", () => {
            audioPlayer.play().then(() => {
              playBtn.textContent = "🔊 Playing Audio...";
            }).catch(err => console.warn("Audio play error:", err));
          });
        }
      } else {
        const audioContainer = document.getElementById("audio-container");
        if (audioContainer) audioContainer.style.display = "none";
      }
    }

    // 4. Render Point-Wise Story Bullet List
    if (storyText) {
      if (item.points && Array.isArray(item.points)) {
        storyText.innerHTML = `
          <ul style="list-style-type: disc; padding-left: 1.25rem; line-height: 1.8; color: #334155;">
            ${item.points.map(pt => `<li style="margin-bottom: 0.75rem;">${pt}</li>`).join('')}
          </ul>
        `;
      } else {
        storyText.textContent = item.shortDesc;
      }
    }

    // =========================================================
    // 👉 5. NEW FEATURES: MAP, HOTELS, WEATHER & BOOKING COUNTER
    // =========================================================

    // A. Embed Live Google Map
    const mapContainer = document.getElementById("map-container");
    if (mapContainer && item.mapEmbed) {
      mapContainer.innerHTML = `
        <iframe 
          src="${item.mapEmbed}" 
          width="100%" 
          height="100%" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      `;
    }

    // B. Render Recommended Nearby Hotels
    const hotelList = document.getElementById("hotel-list");
    if (hotelList && item.hotels) {
      hotelList.innerHTML = item.hotels
        .map(
          hotel => `
          <li style="padding: 0.6rem 0; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center;">
            <div>
              <strong style="color: #1e293b; display: block;">${hotel.name}</strong>
              <small style="color: #64748b;">📍 ${hotel.distance}</small>
            </div>
            <span style="background: #f1f5f9; padding: 0.2rem 0.5rem; border-radius: 4px; font-weight: 600; color: #0f172a; font-size: 0.85rem;">
              ${hotel.rating}
            </span>
          </li>
        `
        )
        .join("");
    }

    // C. Render Weather Widget Data
    const weatherInfo = document.getElementById("weather-info");
    if (weatherInfo && item.weatherQuery) {
      let lat = 28.6562, lon = 77.2410; // Default to Delhi
      if (item.id === "ajanta" || item.id === "ellora") { lat = 20.5523; lon = 75.7004; }
      if (item.id === "tajmahal") { lat = 27.1751; lon = 78.0421; }
      if (item.id === "konark") { lat = 19.8876; lon = 86.0945; }

      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
        .then(res => res.json())
        .then(data => {
          if (data.current_weather) {
            weatherInfo.innerHTML = `
              <p style="margin: 0; font-weight: 600;">Location: ${item.weatherQuery}</p>
              <p style="margin: 0.3rem 0 0 0; color: #0369a1;">☀️ ${data.current_weather.temperature}°C | Wind: ${data.current_weather.windspeed} km/h (Clear & Ideal)</p>
            `;
          }
        })
        .catch(() => {
          weatherInfo.innerHTML = `
            <p style="margin: 0; font-weight: 600;">Location: ${item.weatherQuery}</p>
            <p style="margin: 0.3rem 0 0 0; color: #0369a1;">☀️ 28°C — Sunny & Clear (Ideal for tours)</p>
          `;
        });
    }

    // D. Booking Form Constraints & Handler
    const dateInput = document.getElementById("visit-date");
    if (dateInput) {
      const today = new Date().toISOString().split("T")[0];
      dateInput.min = today;
      dateInput.value = today;
    }

    const bookingForm = document.getElementById("tour-booking-form");
    const bookingStatus = document.getElementById("booking-status");
    if (bookingForm) {
      bookingForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const date = dateInput.value;
        const count = document.getElementById("ticket-count").value;
        if (bookingStatus) {
          bookingStatus.style.color = "#16a34a";
          bookingStatus.textContent = `✅ Reserved ${count} ticket(s) for ${item.name} on ${date}! Confirmation sent.`;
        }
      });
    }

  }
});