const heritageData = [
  {
    id: "ajanta",
    name: "Ajanta Caves",
    image: "images/ajintha.jpg",
    modelPath: "models/ajintha.gltf",
    audioPath: "audio/ajanta_story.mp3",
    location: "Chhatrapati Sambhajinagar, Maharashtra",
    category: "Caves",
    shortDesc: "30 rock-cut Buddhist cave monuments famous for ancient masterpieces of religious art.",
    points: [
      "Rock-Cut Marvel: Consists of 30 rock-cut Buddhist cave monuments excavated into a 75-meter high, horseshoe-shaped basalt cliff along the Waghora River.",
      "Two Historical Phases: Carved across two distinct periods—the Satavahana period (2nd century BCE) and the Vakataka period (5th century CE).",
      "Ancient Fresco Paintings: World-famous for preserved tempera wall paintings illustrating Jataka tales and the life of Buddha.",
      "Architectural Design: Features both Chaityas (prayer halls with stupas) and Viharas (monastic residential halls).",
      "Accidental Rediscovery: Hidden by dense foliage for centuries until rediscovered in 1819 by British officer John Smith during a hunting trip."
    ],
    mapEmbed: "https://maps.google.com/maps?q=Ajanta%20Caves&t=&z=13&ie=UTF8&iwloc=&output=embed",
    weatherQuery: "Chhatrapati Sambhajinagar",
    hotels: [
     { name: "Ajanta T-Junction Resort (MTDC)", distance: "4 km away", rating: "4.2 ⭐" },
     { name: "Hotel Ajanta Green", distance: "12 km away", rating: "4.0 ⭐" },
     { name: "Vivanta Chhatrapati Sambhajinagar", distance: "95 km away", rating: "4.7 ⭐" }
   ]
  },
  {
    id: "ellora",
    name: "Ellora Caves",
    image: "images/ellora.jpg",
    modelPath: "models/ellora.gltf",
    audioPath: "audio/ellora_story.mp3",
    location: "Chhatrapati Sambhajinagar, Maharashtra",
    category: "Caves",
    shortDesc: "One of the largest rock-cut Hindu temple cave complexes in the world.",
    points: [
      "Monolithic Kailasa Temple (Cave 16): Houses the largest single monolithic rock excavation on Earth, carved top-down from a single basalt cliff.",
      "Interfaith Harmony: Contains 34 major cave structures built side-by-side representing Hindu, Buddhist, and Jain traditions.",
      "Rashtrakuta Dynasty Patronage: Developed between the 6th and 10th centuries CE under royal patronage.",
      "Sculptural Reliefs: Known for dramatic sculptures, including Ravana attempting to lift Mount Kailash."
    ],
    mapEmbed: "https://maps.google.com/maps?q=Ellora%20Caves&t=&z=13&ie=UTF8&iwloc=&output=embed",
    weatherQuery: "Chhatrapati Sambhajinagar",
    hotels: [
     { name: "Hotel Kailas (Near Ellora Caves)", distance: "0.5 km away", rating: "4.3 ⭐" },
     { name: "Meadows Resort & Spa", distance: "18 km away", rating: "4.5 ⭐" },
     { name: "Welcomhotel by ITC Hotels", distance: "24 km away", rating: "4.6 ⭐" }
    ]
  },
  {
    id: "konark",
    name: "Konark Sun Temple",
    image: "images/konark.jpg",
    modelPath: "models/konark.gltf",
    audioPath: "audio/konark_story.mp3",
    location: "Puri District, Odisha",
    category: "Temples",
    shortDesc: "13th-century Sun Temple designed as a colossal stone chariot.",
    points: [
      "Colossal Stone Chariot: Built in the shape of a massive 12-wheeled chariot pulled by 7 rearing horses, dedicated to the Sun God Surya.",
      "Astronomical Sundials: The 24 stone wheels function as accurate sundials, casting shadows that indicate precise time.",
      "Kalinga Architecture: Constructed around 1250 CE by King Narasimhadeva I using Khondalite rocks.",
      "Black Pagoda Legend: Known historically to European sailors as the 'Black Pagoda' due to its dark stone silhouette."
    ],
    mapEmbed: "https://maps.google.com/maps?q=Konark%20Sun%20Temple&t=&z=14&ie=UTF8&iwloc=&output=embed",
    weatherQuery: "Puri",
    hotels: [
     { name: "Yatri Nivas Konark (OTDC)", distance: "1.0 km away", rating: "4.1 ⭐" },
     { name: "Lotus Eco Resort Konark", distance: "3.2 km away", rating: "4.4 ⭐" },
     { name: "Mayfair Heritage Puri", distance: "32 km away", rating: "4.7 ⭐" }
   ]
  },
  {
    id: "redfort",
    name: "Red Fort",
    image: "images/redfort.jpg",
    modelPath: "models/redfort.gltf",
    audioPath: "audio/redfort_story.mp3",
    location: "New Delhi, Delhi",
    category: "Forts",
    shortDesc: "Historic red sandstone fortress served as the main residence of the Mughal Emperors.",
    points: [
      "Red Sandstone Citadel: Built from massive red sandstone quarried from Rajasthan, featuring 2.41 km of defensive walls.",
      "Mughal Capital Shift: Commissioned by Emperor Shah Jahan in 1638 when shifting the Mughal capital from Agra to Shahjahanabad.",
      "Architectural Fusion: Synthesizes Persian, Timurid, and Hindu architectural traditions.",
      "Historical Significance: Site of the Peacock Throne in Diwan-i-Khas, and modern venue for India's Independence Day flag hoisting."
    ],
    mapEmbed: "https://maps.google.com/maps?q=Red%20Fort%20Delhi&t=&z=14&ie=UTF8&iwloc=&output=embed",
    weatherQuery: "New Delhi",
    hotels: [
    { name: "Haveli Dharampura", distance: "1.2 km away", rating: "4.6 ⭐" },
    { name: "The Maidens Hotel", distance: "3.5 km away", rating: "4.7 ⭐" },
    { name: "Bloomrooms @ Janpath", distance: "4.8 km away", rating: "4.3 ⭐" }
   ]
  },
  {
    id: "tajmahal",
    name: "Taj Mahal",
    image: "images/tajmahal.jpg",
    modelPath: "models/tajmahal.gltf",
    audioPath: "audio/tajmahal_story.mp3",
    location: "Agra, Uttar Pradesh",
    category: "Monuments",
    shortDesc: "An ivory-white marble mausoleum on the right bank of the river Yamuna.",
    points: [
      "White Makrana Marble: Built entirely out of white marble that shifts in tone from morning to moonlight.",
      "Engineered Symmetry: Designed with strict bilateral symmetry; minarets tilt slightly outward to protect the central dome from earthquake damage.",
      "Intricate Parchin Kari: Inlaid with over 28 types of semi-precious stones, including lapis lazuli, jade, and crystal.",
      "Monument of Love: Commissioned in 1631 by Mughal Emperor Shah Jahan as a tomb for his wife, Mumtaz Mahal."
    ],
    mapEmbed: "https://maps.google.com/maps?q=Taj%20Mahal%20Agra&t=&z=14&ie=UTF8&iwloc=&output=embed",
    weatherQuery: "Agra",
   hotels: [
    { name: "The Oberoi Amarvilas", distance: "0.6 km away", rating: "4.9 ⭐" },
    { name: "Hotel Taj Resort", distance: "0.8 km away", rating: "4.3 ⭐" },
    { name: "ITC Mughal, Agra", distance: "2.5 km away", rating: "4.6 ⭐" }
    ]
  }
];

// Utility Function to Render Heritage Cards Dynamically
function renderHeritageCards(data, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = data.map(item => `
    <div class="card">
      <div class="card-image-wrapper" style="position: relative; height: 220px;">
        <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div class="card-content" style="padding: 1rem;">
        <span class="badge" style="background: #e67e22; color: #fff; padding: 2px 8px; border-radius: 4px; font-size: 0.8rem;">${item.category}</span>
        <h3 style="margin-top: 0.5rem; margin-bottom: 0.25rem;">${item.name}</h3>
        <p style="font-size: 0.85rem; color: #666; margin-bottom: 0.5rem;">📍 ${item.location}</p>
        <p style="font-size: 0.9rem; color: #444; line-height: 1.4; margin-bottom: 1rem;">${item.shortDesc}</p>
        <a href="viewer.html?id=${item.id}" class="btn btn-primary" style="display: block; text-align: center; text-decoration: none;">View 3D Model & Story ➔</a>
      </div>
    </div>
  `).join('');
}