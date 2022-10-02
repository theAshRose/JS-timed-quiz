//home page

var startButton = document.querySelector("#start-button");
var scorePageButton = document.querySelector("#score-page-button");

var homePage = document.querySelector("#home");

//quiz page

var aButton1 = document.querySelector("#aButton1");
var aButton2 = document.querySelector("#aButton2");
var aButton3 = document.querySelector("#aButton3");
var aButton4 = document.querySelector("#aButton4");


var question = document.getElementById("question");
var aList = document.querySelector("#a-list");

var quizPage = document.querySelector("#quiz");

var timer = document.querySelector("#timer");

//score page

var homeButton = document.querySelector("#home-button");
var clearScore = document.querySelector("#clear-button");

var scoreList = document.querySelector(".score-list");
var scorePage = document.querySelector("#score-page");
var scoreData = document.querySelector(".score-data");

//initials input page
var initialsButton = document.querySelector("#user-initials-button");

var initialsInput = document.querySelector("#user-initials");

var initialScore = document.querySelector("#user-score");
var initialsPage = document.querySelector("#post-game-input");




//event listeners
startButton.addEventListener("click", startQuiz);
scorePageButton.addEventListener("click", scorePageGo);
clearScore.addEventListener("click", clearScores);
homeButton.addEventListener("click", pageLoad);
initialsButton.addEventListener("click", scorePageGo);





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



var answerButtonAll = document.querySelectorAll(".answerButton");
    for (x = 0; x <answerButtonAll.length; x++){
        answerButtonAll[x].addEventListener("click", function(){
            // if (answerButtonAll.innerHTML != questionArray.correctAnswer){
            //     alert("working");
            // }
            questionIndex++;
            populateQuestion();
        });
    }

var questionIndex = 0;

function populateQuestion() {
    if (questionIndex >= questionArray.length) {scoreInput();}
        
    
     currentQuestion = questionArray[questionIndex];
     question.textContent = currentQuestion.questionText;
     aButton1.textContent = currentQuestion.answers[0]
     aButton2.textContent = currentQuestion.answers[1]
     aButton3.textContent = currentQuestion.answers[2]
     aButton4.textContent = currentQuestion.answers[3]
        // console.log(answerButtonAll);
        // console.log(questionArray.toString);
        // console.log(currentQuestion);
     };
     

var score = "";

var timeLeft = 61;

function startClock(){
    var clockInterval = setInterval(function(){
        timeLeft--;
        timer.textContent = timeLeft;
        if(timeLeft === 0) {
            clearInterval(clockInterval);
            scorePageGo();
        }
    }, 1000);
}


function startQuiz() {
    document.querySelector("#home").hidden = true;
    document.querySelector("#quiz").hidden = false;
    document.querySelector("#post-game-input").hidden = true;
    document.querySelector("#score-page").hidden = true;
    document.querySelector("#home-button").hidden = true;
    document.querySelector("#score-page-button").hidden = false;
    startClock();
    populateQuestion();
}

pageLoad();

function clearScores() {};

function pageLoad() {
    document.querySelector("#home").hidden = false;
    document.querySelector("#quiz").hidden = true;
    document.querySelector("#post-game-input").hidden = true;
    document.querySelector("#score-page").hidden = true;
    document.querySelector("#home-button").hidden = true;
    document.querySelector("#score-page-button").hidden = false;
    if (questionIndex >= questionArray.length) {
        window.location.reload();
    }
};

function scoreInput() {
    document.querySelector("#home").hidden = true;
    document.querySelector("#quiz").hidden = true;
    document.querySelector("#post-game-input").hidden = false;
    document.querySelector("#score-page").hidden = true;
    document.querySelector("#home-button").hidden = true;
    document.querySelector("#score-page-button").hidden = true;
    timer.hidden = true;
};

function scorePageGo() {
    homePage.hidden = true;
    quizPage.hidden = true;
    initialsPage.hidden = true;
    scorePage.hidden = false;
    homeButton.hidden = false;
    scorePageButton.hidden = false;
    timer.hidden = true;
};

function scoreStorage() {

}
