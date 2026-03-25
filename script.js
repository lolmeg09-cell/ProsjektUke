let quiz = [
  {
    quiestion: "Hovedstaten i Norge er?",
    choices: [
      {
        id: 1,
        label: "Oslo"
      },
      {
        id: 2,
        label: "New york"
      },
      {
        id: 3,
        label: "somalia"
      },
      {
        id: 4,
        label: "jens stoltenberg"
      },
    ],
    correct: "1"

  },
  {
    quiestion: "Hvor ligger bleiker?",
    choices: [
      {
        id: 1,
        label: "Oslo"
      },
      {
        id: 2,
        label: "asker"
      },
      {
        id: 3,
        label: "somalia"
      },
      {
        id: 4,
        label: "Furkan"
      },
    ],
    correct: "2"

  },


];

  function loadQuiz() {
    console.log("quiz.loaded")

    let firstElement = quiz[0]
    console.log(firstElement)

    let h2 = document.getElementById("question")

    h2.innerHTML += `${firstElement.question}`

    let buttons = firstElement.choices;

    console.log(buttons);

    buttons.forEach(button => {
      buttons.innerHTML += `<button id="${button.id}" onclick="checkAnswer${button.id},${firstElement.correctAnswe}">${button.label}</button>`
      
    });



  }

  function checkAnswer(buttonId, correctAnswer) {

    let isCorrect = buttonId === correctAnswer;
    
      if(isCorrect) {
    document.getElementById(buttenId).classList.add("correct");
  } else {

  }

  }



loadQuiz();