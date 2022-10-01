//button variables
var startButton = document.querySelector("#start-button");
var highScoreButton = document.getElementById("#score-page-button");
var aButton = document.getElementsByClassName(".a-button");
var aList = document.getElementById("#a-list");
var homeButton = document.getElementById("#home-button");
var clearScore = document.getElementById("#clear-button");

//page elements
var userInitials = document.getElementById("#user-initials");
var scoreList = document.querySelector(".score-list");
var timer = document.getElementById("#timer");
//div variables "pages"
var homePage = document.querySelector("#Home");
var quizPage = document.getElementById("#quiz");

var scorePage = document.querySelector("#score-page");
var scoreInput = document.querySelector(".score-input");

//event listeners
startButton.addEventListener("click", startQuiz);
scorePage.addEventListener("click", scorePageGo);


clearScore.addEventListener("click", scorePageGo);

homeButton.addEventListener("click", scorePageGo);

// default hidden sections:


document.getElementById("#score-page").hidden = true;
document.getElementById("#quiz").hidden = true;
document.getElementById("#home").hidden = false;
document.getElementById("#home-button").hidden = true;



function clearScores() {
}

function scorePageGo() {
window.location.reload();
return;
}

function startQuiz() {
startButton.textContent = "START MEEE";
return;
}

var question = document.getElementById("#question")
var questionArray = [
    {"This is a question?":
    ["answer1", "answer2", "answer3", "answer 4"
    ["correct answer"]]},

    {"This is a question?":
    ["answer1", "answer2", "answer3", "answer 4"
    ["correct answer"]]},

    {"This is a question?":
    ["answer1", "answer2", "answer3", "answer 4"
    ["correct answer"]]},

    {"This is a question?":
    ["answer1", "answer2", "answer3", "answer 4"
    ["correct answer"]]},

    {"This is a question?":
    ["answer1", "answer2", "answer3", "answer 4"
    ["correct answer"]]},

    {"This is a question?":
    ["answer1", "answer2", "answer3", "answer 4"
    ["correct answer"]]}
];