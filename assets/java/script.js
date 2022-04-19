// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

//Questions Array

var questions = [
    {
        question: "Which of the following code languange are used for styling",
        choices: ["a. <html>", "b. <css>", "c. <python>", "d. <javascript>"],
        answer: "b. <css>"
    },
    {
        question: "To upload files from local repository to github, user must use which git function?",
        choices: ["a. <commit>", "b. <pull>", "c. <push>", "d. <add>"],
        answer: "c. <push>"
    },
    {
        question: "In JavaScript, ______ is a single variable that is used to store different elements.",
        choices: ["a. <function>", "b. <console log>", "c. <array>", "d. <loop>"],
        answer: "c. <array>"
    },
    {
        question: "An _________ is a piece of markup language used to adjust the behavior or display of an HTML element.",
        choices: ["a. <attribute>", "b. <element>", "c. <function>", "d. <body>"],
        answer: "a. <attribute>"
    },
    {
        question: "What is a fast, small, and feature-rich JavaScript library that coders often access for support",
        choices: ["a. <jQuery>", "b. <Bootstrap>", "c. <html>", "d. <stylesheet>"],
        answer: "a. <jQuery>"
    },
];

// element reference

//timer 
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesUp");

//start quiz
var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-button");

//buttons and questions
var questionDiv = document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");
var answerCheck = document.getElementById("answerCheck");

var summary = document.getElementById("summary");
var submitInitialBtn = document.getElementById("submitInitialBtn");
var initialInput = document.getElementById("initialInput");
var everything = document.getElementById("everything");

//score
var highScoreSection = document.getElementById("highScoreSection");
var finalScore = document.getElementById("finalScore");

//complete and restart quiz
var goBackBtn = document.getElementById("goBackBtn");
var clearHighScoreBtn = document.getElementById("clearHighScoreBtn"); 
var viewHighScore = document.getElementById("viewHighScore");
var listOfHighScores = document.getElementById("listOfHighScores");

//
var scoreResult;
var questionIndex = 0;
var correctAns = 0;
var questionNum = 0;

//Start button and start timer
var totalTime = 60;
function newQuiz() {
    questionIndex = 0;
    totalTime = 60;
    timeLeft.textContent = totalTime;
    initialInput.textContent = "";

    startDiv.style.display = "none";
    questionDiv.style.display = "block";
    timer.style.display = "block";
    timesUp.style.display = "none";

    var startTimer = setInterval(function() {
        totalTime--;
        timeLeft.textContent = totalTime;
        if(totalTime <= 0) {
            clearInterval(startTimer);
            if (questionIndex < questions.length - 1) {
                gameOver();
            }
        }
    },1000);

    showQuiz();
};

function showQuiz() {
    nextQuestion();
}
function nextQuestion() {
    questionTitle.textContent = questions[questionIndex].question;
    choiceA.textContent = questions[questionIndex].choices[0];
    choiceB.textContent = questions[questionIndex].choices[1];
    choiceC.textContent = questions[questionIndex].choices[2];
    choiceD.textContent = questions[questionIndex].choices[3];
}

//Check answers if they are correct or wrong
function checkAnswer(answer) {

    var lineBreak = document.getElementById("lineBreak");
    lineBreak.style.display = "block";
    answerCheck.style.display = "block";

    if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
        // 1 point for correct answer
        correctAns++;
        answerCheck.textContent = "Correct!";
    } else {
        // - 5 seconds for wrong answer
        totalTime -= 5;
        timeLeft.textContent = totalTime;
        answerCheck.textContent = "Wrong! The correct answer is: " + questions[questionIndex].answer;
    }

    questionIndex++;
    //repeat questions if quiz is completed
    if (questionIndex < questions.length) {
        nextQuestion();
    } else {
        gameOver();
    }
}

function chooseA() { checkAnswer(0); }
function chooseB() { checkAnswer(1); }
function chooseC() { checkAnswer(2); }
function chooseD() { checkAnswer(3); }
function gameOver() {
    summary.style.display = "block";
    questionDiv.style.display = "none";
    startDiv.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "block";
    finalScore.textContent = correctAns;
}

//Save user initials and store score in local storage 
function storeHighScores(event) {
    event.preventDefault();

    startDiv.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "none";
    summary.style.display = "none";
    highScoreSection.style.display = "block";   

    // store scores into local storage
    var savedHighScores = localStorage.getItem("high scores");
    var scoresArray;

    if (savedHighScores === null) {
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(savedHighScores)
    }

    var userScore = {
        initials: initialInput.value,
        score: finalScore.textContent
    };

    console.log(userScore);
    scoresArray.push(userScore);

    var scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem("high scores", scoresArrayString);
    
    showHighScores();
}

// function for highscore
var i = 0;
function showHighScores() {

    startDiv.style.display = "none";
    timer.style.display = "none";
    questionDiv.style.display = "none";
    timesUp.style.display = "none";
    summary.style.display = "none";
    highScoreSection.style.display = "block";

    var savedHighScores = localStorage.getItem("high scores");

    if (savedHighScores === null) {
        return;
    }
    console.log(savedHighScores);

    var storedHighScores = JSON.parse(savedHighScores);

    for (; i < storedHighScores.length; i++) {
        var eachNewHighScore = document.createElement("p");
        eachNewHighScore.innerHTML = storedHighScores[i].initials + ": " + storedHighScores[i].score;
        listOfHighScores.appendChild(eachNewHighScore);
    }
}