//home page

var startButton = document.querySelector("#start-button");
var scorePageButton = document.querySelector("#score-page-button");

var homePage = document.querySelector("#home");

//quiz page

var aButton = document.getElementsByClassName(".a-button");

var question = document.getElementById("#question");
var aList = document.getElementById("#a-list");

var quizPage = document.getElementById("#quiz");

var timer = document.getElementById("#timer");

//score page

var homeButton = document.querySelector("#home-button");
var clearScore = document.querySelector("#clear-button");

var scoreList = document.querySelector(".score-list");
var scorePage = document.querySelector("#score-page");
var scoreData = document.querySelector(".score-data");

//initials input page
var initialsButton = document.querySelector("#user-initials-button");

var initialsInput = document.getElementById("#user-initials");

var initialScore = document.getElementById("#user-score");
var initialsPage = document.getElementById("#post-game-input");


//event listeners
startButton.addEventListener("click", startQuiz);
scorePageButton.addEventListener("click", scorePageGo);
clearScore.addEventListener("click", clearScores);
homeButton.addEventListener("click", pageLoad);


pageLoad();

// default hidden sections:
// document.getElementById("#score-page").hidden = true;
// document.getElementById("#home").hidden = false;
// 

function pageLoad() {
    document.querySelector("#home").hidden = false;
    document.querySelector("#quiz").hidden = true;
    document.querySelector("#post-game-input").hidden = true;
    document.querySelector("#score-page").hidden = true;
    document.querySelector("#home-button").hidden = true;
    document.querySelector("#score-page-button").hidden = false;
}

function clearScores() {
};

function scorePageGo() {
    document.querySelector("#home").hidden = true;
    document.querySelector("#quiz").hidden = true;
    document.querySelector("#post-game-input").hidden = true;
    document.querySelector("#score-page").hidden = false;
    document.querySelector("#home-button").hidden = false;
    document.querySelector("#score-page-button").hidden = true;
};

var questionArray = [
    {
        questionText: "Fill in blank: JavaScript is a ______ language", 
        answers: ["body", "coffee language", "dutch", "programming"],
        correctAnswer: "programming",
    },
    {
        questionText: "When was Javascript created?", 
        answers: ["1969", "1995", "12077", "2012"],
        correctAnswer: "1995",
    }
];

var currentQuestion = [];
populateQuestion();
function populateQuestion() {
    currentQuestion = questionArray[0];
    console.log(currentQuestion);

  //questionIndex++;

}

function startQuiz() {
    document.querySelector("#home").hidden = true;
    document.querySelector("#quiz").hidden = false;
    document.querySelector("#post-game-input").hidden = true;
    document.querySelector("#score-page").hidden = true;
    document.querySelector("#home-button").hidden = true;
    document.querySelector("#score-page-button").hidden = false;

    
}

