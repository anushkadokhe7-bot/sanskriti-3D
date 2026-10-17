const quizQuestions = [
  {
    id: "q1",
    question: "1. Which dynasty commissioned the construction of the Kailasa Temple at Ellora?",
    options: ["Mughal Dynasty", "Rashtrakuta Dynasty", "Chola Dynasty", "Maurya Dynasty"],
    answer: "Rashtrakuta Dynasty"
  },
  {
    id: "q2",
    question: "2. The Konark Sun Temple in Odisha is designed in the shape of a colossal what?",
    options: ["Lotus Flower", "Stone Chariot", "Royal Elephant", "Flying Peacock"],
    answer: "Stone Chariot"
  },
  {
    id: "q3",
    question: "3. What type of rock were the 30 Buddhist cave monuments at Ajanta excavated into?",
    options: ["Limestone", "Granite", "Basalt Cliff", "Sandstone"],
    answer: "Basalt Cliff"
  },
  {
    id: "q4",
    question: "4. Which Mughal Emperor commissioned the Red Fort in Delhi when shifting his capital from Agra?",
    options: ["Akbar", "Shah Jahan", "Babur", "Aurangzeb"],
    answer: "Shah Jahan"
  },
  {
    id: "q5",
    question: "5. What material gives the Taj Mahal its iconic ivory-white appearance?",
    options: ["Makrana Marble", "Red Sandstone", "Terracotta", "Quartzite"],
    answer: "Makrana Marble"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("quiz-container");
  const form = document.getElementById("quiz-form");
  const resultContainer = document.getElementById("quiz-result");

  // 1. Render Questions & Radio Buttons
  if (container) {
    container.innerHTML = quizQuestions.map((q, index) => `
      <div style="margin-bottom: 1.5rem; padding: 1rem; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
        <h3 style="font-size: 1.05rem; color: #0f172a; margin-bottom: 0.75rem;">${q.question}</h3>
        <div>
          ${q.options.map(opt => `
            <label style="display: block; margin-bottom: 0.5rem; cursor: pointer; color: #334155;">
              <input type="radio" name="${q.id}" value="${opt}" required style="margin-right: 0.5rem;">
              ${opt}
            </label>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // 2. Handle Quiz Submission & Scoring
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let score = 0;

      quizQuestions.forEach(q => {
        const selected = document.querySelector(`input[name="${q.id}"]:checked`);
        if (selected && selected.value === q.answer) {
          score++;
        }
      });

      if (resultContainer) {
        resultContainer.style.display = "block";
        if (score >= 4) {
          resultContainer.style.background = "#dcfce7";
          resultContainer.style.color = "#15803d";
          resultContainer.innerHTML = `🎉 Outstanding! You scored ${score} out of ${quizQuestions.length}!`;
        } else if (score >= 2) {
          resultContainer.style.background = "#fef9c3";
          resultContainer.style.color = "#a16207";
          resultContainer.innerHTML = `👍 Good job! You scored ${score} out of ${quizQuestions.length}. Keep learning!`;
        } else {
          resultContainer.style.background = "#fee2e2";
          resultContainer.style.color = "#b91c1c";
          resultContainer.innerHTML = `📘 You scored ${score} out of ${quizQuestions.length}. Review the 3D Heritage collection and try again!`;
        }
      }
    });
  }
});