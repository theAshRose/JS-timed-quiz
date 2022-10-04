//basic variables definition
var homeButton = document.querySelector("#home-button");
var clearScore = document.querySelector("#clear-button");
var scoreList = document.querySelector("#score-list");
var scorePage = document.querySelector("#score-page");
var scoreData = document.querySelector(".score-data");
var startButton = document.querySelector("#start-button");
var scorePageButton = document.querySelector("#score-page-button");
var homePage = document.querySelector("#home");
var answerStatus = document.querySelector("#answer-status");
var finalAnswer = document.querySelector("#final.answer")
var question = document.getElementById("question");
var aList = document.querySelector("#a-list");
var quizPage = document.querySelector("#quiz");
var timer = document.querySelector("#timer");
var initialsPage = document.querySelector("#post-game-input");

//global event listeners, these mostly initiate page switching
startButton.addEventListener("click", startQuiz);
scorePageButton.addEventListener("click", scorePageGo);
clearScore.addEventListener("click", clearScores);
homeButton.addEventListener("click", pageLoad2);

//this app is using .hidden to switch between sections currently in action. so each page display setup is nested in a function
var initialsButton = document.querySelector("#user-initials-button");
var initialsInput = document.querySelector("#user-initials");
var initialScore = document.querySelector("#user-score");

var userScore = 0;
//this app is using .hidden to switch between sections currently in action. so each page display setup is nested in a function
function scorePageGo() {
    homePage.hidden = true;
    quizPage.hidden = true;
    initialsPage.hidden = true;
    scorePage.hidden = false;
    homeButton.hidden = false;
    scorePageButton.hidden = true;
    timer.hidden = true;
//this renders the list on the scorepage, it only creates a list if there is local storage of data. 
var highScores = JSON.parse(localStorage.getItem("scoreString")) || [];
    highScores.forEach(function(score){
        var liElem = document.createElement("li");
        liElem.textContent = score.initials + " -- " + score.score;
        scoreList.appendChild(liElem);

    });
};
//this is when the user inputs their initials at the end, the score+user input is made into an array of objects, then put into a string before being stored w/ JSON
initialsButton.addEventListener("click", function(event) {
    event.preventDefault();
    var highScores = JSON.parse(localStorage.getItem("scoreString")) || [];
    var initials = initialsInput.value;
    var scoreString = {
        score: userScore,
        initials: initials,
    }
    window.localStorage.clear(highScores);
    highScores.push(scoreString);
    localStorage.setItem("scoreString", JSON.stringify(highScores));
    scorePageGo();
});
//this simply clears local storage and hides our current list, when the page reloads on the home button activation, a list doesnt exist because its not populated by our function in scorepagego function.
function clearScores() {
    scoreList.hidden = true;
    window.localStorage.clear();
};
//an array of objects to populate our questions
var questionArray = [
    {
        questionText: "Fill in blank: JavaScript is a ______ language", 
        answers: ["body", "coffee language", "dutch", "programming"],
        correctAnswer: "programming",
    },
    {
        questionText: "When was Javascript created?", 
        answers: ["1969", "1995", "2077", "2012"],
        correctAnswer: "1995",
    },
    {
        questionText: "Which is a proper JavaScript comment?", 
        answers: ["??", "!#", "\\", "//"],
        correctAnswer: "//",
    },
    {
        questionText: "if we convert a object array into to a string with .JSON, which element type will be returned when we retrieve it with .JSON?", 
        answers: ["flex-wrap: wrap", "HTML", "string", "object"],
        correctAnswer: "object",
    },
    {
        questionText: "how many woods could a wood chuck chuck for (chucks = 0; chucks < wood.length; chucks++) if... ?",
        answers: ["(wood = wood[chucks]) {...", "(chucks[wood] = chucks) {...", "...function(event, {woodchuck*pi}", "chuck[wood] = wood.chuck: true;"],
        correctAnswer: "(wood = wood[chucks]) {...",
    },
    {
        questionText: "which value does an 'if' statement return?", 
        answers: ["string", "intiger", "naan", "truthy/falsey"],
        correctAnswer: "truthy/falsey",
    },
    {
        questionText: "how do we retrieve an ID'd with queryselector?", 
        answers: ["...querySelector('.element')", "...querySelector('element')", "...querySelector('#element')", "...querySelector('document.element')"],
        correctAnswer: "...querySelector('#element')",
    },
    {
        questionText: "what is the proper number to setInterval to tick per normal second?", 
        answers: ["600", "100", "60", "1000"],
        correctAnswer: "1000",
    },
    {
        questionText: "which is the 'OR' operator?", 
        answers: ["!==", "===", "||", "&&"],
        correctAnswer: "||",
    },
    {
        questionText: "which method works to write text onto the page via JavaScript?", 
        answers: ["console.log()", "document.write()", "addEventListener()", "appendChild()"],
        correctAnswer: "document.write()",
    }
];
//answer buttons all get selected, then iterate through a for loop and measure current question selected from array. if statements follow up with either time reduction or score increase, a written note to user about whether the question was correct or not, and then they trigger population of next question
var answerButtonAll = document.querySelectorAll(".answerButton");
    for (x = 0; x <answerButtonAll.length; x++){
        answerButtonAll[x].addEventListener("click", function(event){
             if (event.target.innerText !== questionArray[questionIndex].correctAnswer) {
                timeLeft = timeLeft - 15;
                answerStatus.textContent = "WRONG ANSWER! NO SOUP FOR YOU!";
             }
             if (event.target.innerText == questionArray[questionIndex].correctAnswer) {
                userScore = userScore +3;
                answerStatus.textContent = "Correct! Cake at the end!";
             }
            questionIndex++
            populateQuestion()
        });
    }
//below function populates our question, and if we run outof questions the test is ended
var questionIndex = 0;
function populateQuestion() {
    if (questionIndex >= questionArray.length) {scoreInput();}
     currentQuestion = questionArray[questionIndex];
     question.textContent = currentQuestion.questionText;
     aButton1.textContent = currentQuestion.answers[0]
     aButton2.textContent = currentQuestion.answers[1]
     aButton3.textContent = currentQuestion.answers[2]
     aButton4.textContent = currentQuestion.answers[3]
     };
     
var timeLeft = 61;
//it is what is sounds like, there is a conditional for when the timer runs out to end the test
function startClock(){
    var clockInterval = setInterval(function(){
        timeLeft--;
        timer.textContent = timeLeft;
        if(questionIndex >= questionArray.length|| timeLeft <= 0 ) {
            clearInterval(clockInterval);
            scoreInput();
        }
    }, 1000);
}
//in this function we show the test section, hide the rest and run our clock and populatequestion functions
function startQuiz() {
    homePage.hidden = true;
    quizPage.hidden = false;
    initialsPage.hidden = true;
    scorePage.hidden = true;
    homeButton.hidden = true;
    scorePageButton.hidden = false;
    startClock();
    populateQuestion();
}
//this is called upon on page load to show our start screen and hide everything else
function pageLoad() {
    homePage.hidden = false;
    quizPage.hidden = true;
    initialsPage.hidden = true;
    scorePage.hidden = true;
    homeButton.hidden = true;
    scorePageButton.hidden = false;
}
//this is a function i had to make which is specifically tied to the "return home" button at the end of the quiz. this refreshes the page and gets rid of lingering high score lists which would otherwise persist
function pageLoad2() {
    homePage.hidden = false;
    quizPage.hidden = true;
    initialsPage.hidden = true;
    scorePage.hidden = true;
    homeButton.hidden = true;
    scorePageButton.hidden = false;
    window.location.reload();
}
//this function is called at the end of the quiz from different functions for different reasons
function scoreInput() {
    initialScore.textContent = "You're score: " + userScore;
    homePage.hidden = true;
    quizPage.hidden = true;
    initialsPage.hidden = false;
    scorePage.hidden = true;
    homeButton.hidden = true;
    scorePageButton.hidden = true;
    timer.hidden = true;

};

pageLoad();