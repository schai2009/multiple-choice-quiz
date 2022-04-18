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
        answer: "b"
    },
    {
        question: "To upload files from local repository to github, user must use which git function?",
        choices: ["a. <commit>", "b. <pull>", "c. <push>", "d. <add>"],
        answer: "c"
    },
    {
        question: "In JavaScript, ______ is a single variable that is used to store different elements.",
        choices: ["a. <function>", "b. <console log>", "c. <array>", "d. <loop>"],
        answer: "c"
    },
    {
        question: "An _________ is a piece of markup language used to adjust the behavior or display of an HTML element.",
        choices: ["a. <attribute>", "b. <element>", "c. <function>", "d. <body>"],
        answer: "a"
    },
    {
        question: "What is a fast, small, and feature-rich JavaScript library that coders often access for support",
        choices: ["a. <jQuery>", "b. <Bootstrap>", "c. <html>", "d. <stylesheet>"],
        answer: "a"
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


