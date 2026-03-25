let quiz = [
  {
    question: "Hovedstaten i Norge er?",
    choices: [
      { id: 1, label: "Oslo" },
      { id: 2, label: "New York" },
      { id: 3, label: "Somalia" },
      { id: 4, label: "Jens Stoltenberg" },
    ],
    correct: 1
  },
  {
    question: "Hvor ligger Bleiker?",
    choices: [
      { id: 1, label: "Oslo" },
      { id: 2, label: "Asker" },
      { id: 3, label: "Somalia" },
      { id: 4, label: "Furkan" },
    ],
    correct: 2
  },
];
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
  
 
  h2.innerHTML = "";
  buttonsContainer.innerHTML = "";
  feedback.textContent = "";
  nextButton.innerHTML = "";
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
  
  h2.innerHTML = "Quizen er ferdig!";
  buttonsContainer.innerHTML = "";
  feedback.textContent = "Takk for at du deltok!";
  nextButton.innerHTML = `<button onclick="restartQuiz()">Start på nytt</button>`;
}
function restartQuiz() {
  currentQuestionIndex = 0;
  loadQuestion(0);
}
loadQuiz();