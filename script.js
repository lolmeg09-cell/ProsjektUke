let score = 0;
let playerName = "";
let quiz = [
  {
    question: "Hva gjør en sikring i et elektrisk anlegg?",
    choices: [
      { id: 1, label: "A. Øker spenningen" },
      { id: 2, label: "B. Stopper strømmen hvis den blir for høy" },
      { id: 3, label: "C. Lagrer strøm" },
      { id: 4, label: "D. Lager elektrisk energi" },
    ],
    correct: 2
  },
  {
    question: "Hva måler makspuls?",
    choices: [
      { id: 1, label: "A. Maks antall hjerteslag per minutt" },
      { id: 2, label: "B. Maks oksygenopptak" },
      { id: 3, label: "C. Maks muskelstyrke" },
      { id: 4, label: "D. Maks blodtrykk" },
    ],
    correct: 1
  },
   {
    question: "Hva står RGB for i digital design?",
    choices: [
      { id: 1, label: "A. Rapid Graphic Build" },
      { id: 2, label: "B. Render Graphic Base" },
      { id: 3, label: "C. Red Gradient Blend" },
      { id: 4, label: "D. Red, Green, Blue" },
    ],
    correct: 4
  },
  {
    question: "Hvilket fagområde studerer samfunn og politikk?",
    choices: [
      { id: 1, label: "A. Fysikk" },
      { id: 2, label: "B. Biologi" },
      { id: 3, label: "C. Sosiologi" },
      { id: 4, label: "D. Geografi" },
    ],
    correct: 3
  },
  {
    question: "Hva er mersalg?",
    choices: [
      { id: 1, label: "A. Å gi rabatt" },
      { id: 2, label: "B. Å selge flere produkter til kunden" },
      { id: 3, label: "C. Å avslutte salg" },
      { id: 4, label: "D. Å sende varer" },
    ],
    correct: 2
  },
  {
    question: "Hva er en CNC-maskin?",
    choices: [
      { id: 1, label: "A. Manuell maskin" },
      { id: 2, label: "B. Datastyrt maskin for produksjon" },
      { id: 3, label: "C. Håndverktøy" },
      { id: 4, label: "D. Sveiseapparat" },
    ],
    correct: 2
  },
    {
    question: "Hva betyr UX i design?",
    choices: [
      { id: 1, label: "A. User Experience" },
      { id: 2, label: "B. User Extension" },
      { id: 3, label: "C. Universal Execution" },
      { id: 4, label: "D. User Example" },
    ],
    correct: 1
  },
    {
    question: "Hvilket styresett har Norge?",
    choices: [
      { id: 1, label: "A. Republikk" },
      { id: 2, label: "B. Militærstyre" },
      { id: 3, label: "C. Konstitusjonelt monarki" },
      { id: 4, label: "D. Diktatur" },
    ],
    correct: 3
  },
  {
    question: "Hva er et viktig kjennetegn på et godt klassemiljø?",
    choices: [
      { id: 1, label: "A. Konkurranse mellom elever" },
      { id: 2, label: "B. Stillhet i timene" },
      { id: 3, label: "C. Trygghet og respekt" },
      { id: 4, label: "D. Strenge regler" },
    ],
    correct: 3
  },
  {
    question: "Hvilke av valgene er riktig på hjerte og lungeredning?",
    choices: [
      { id: 1, label: "A" },
      { id: 2, label: "B" },
      { id: 3, label: "C" },
      { id: 4, label: "D. Ingen" },
    ],
    correct: 2
  },
];

function startQuiz() {
  let input = document.getElementById("nameInput").value;

  if (input === "") {
    alert("Skriv inn navn!");
    return;
  }

  playerName = input;

  document.getElementById("startScreen").style.display = "none";
  document.getElementById("quiz_container").style.display = "flex";

  loadQuiz();
}

function saveScore(name, score) {
  let highscores = JSON.parse(localStorage.getItem("highscores")) || [];

  highscores.push({ name: name, score: score });

  highscores.sort((a, b) => b.score - a.score);

  highscores = highscores.slice(0, 5);

  localStorage.setItem("highscores", JSON.stringify(highscores));
}

let currentQuestionIndex = 0;
let chosenAnswer = false;
function loadQuiz() {
  loadQuestion(currentQuestionIndex);
}
function loadQuestion(index) {
  let currentQuestion = quiz[index];
  
  let h2 = document.getElementById("question");
  let buttonsContainer = document.getElementById("buttons");
  let feedback = document.getElementById("feedback");
  let nextButton = document.getElementById("next");
  let videoContainer = document.getElementById("video");
  

if (currentQuestion.video) {
  videoContainer.innerHTML = `
    <video src="${currentQuestion.video}" controls width="300"></video>
  `;
}
  
 
  h2.innerHTML = "";
  buttonsContainer.innerHTML = "";
  feedback.textContent = "";
  nextButton.innerHTML = "";
  videoContainer.innerHTML = "";
  chosenAnswer = false;
  
 
  h2.innerHTML = currentQuestion.question;
  
 
  currentQuestion.choices.forEach(choice => {
    buttonsContainer.innerHTML += `<button id="btn-${choice.id}" onclick="checkAnswer(${choice.id}, ${currentQuestion.correct})">${choice.label}</button>`;
  });
}
function checkAnswer(buttonId, correctAnswer) {
  if (chosenAnswer) return; 
  
  chosenAnswer = true;
  let feedback = document.getElementById("feedback");
  let isCorrect = buttonId === correctAnswer;
  
  if (isCorrect) {
    document.getElementById(`btn-${buttonId}`).classList.add("correct");
    feedback.textContent = "Du hadde riktig!";
    score++;
  } else {
    document.getElementById(`btn-${buttonId}`).classList.add("wrong");
    document.getElementById(`btn-${correctAnswer}`).classList.add("correct");
    feedback.textContent = "Du tok feil!";
  }
  
  let nextButton = document.getElementById("next");
  if (currentQuestionIndex < quiz.length - 1) {
    nextButton.innerHTML = `<button onclick="nextQuestion()">Neste</button>`;
  } else {
    nextButton.innerHTML = `<button onclick="showResult()">Se resultat</button>`;
  }
}
function nextQuestion() {
  currentQuestionIndex++;
  loadQuestion(currentQuestionIndex);
}

function showResult() {
  let h2 = document.getElementById("question");
  let buttonsContainer = document.getElementById("buttons");
  let feedback = document.getElementById("feedback");
  let nextButton = document.getElementById("next");

  h2.innerHTML = `Du fikk ${score} poeng!`;
  buttonsContainer.innerHTML = "";
  nextButton.innerHTML = `<button onclick="restartQuiz()">Start på nytt</button>`;

  saveScore(playerName, score); 
  showHighscores(); // ✅ FIXED
}

function showHighscores() {
  let highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  let container = document.getElementById("feedback");

  let html = "<h3>Top 5:</h3><ol>";

  highscores.forEach(player => {
    html += `<li>${player.name} - ${player.score} poeng</li>`;
  });

  html += "</ol>";

  container.innerHTML = html;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  loadQuestion(0);
}
loadQuiz();