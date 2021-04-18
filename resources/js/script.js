// variables to keep track of the quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// variables to reference DOM elements
var timeEl = document.querySelector("#time");
debugger;
var startBtn = document.querySelector("#startbutton");
var submitBtn = document.querySelector("#submit-button");
var titleScreen = document.querySelector("#title-section");
var quizScreen = document.querySelector("#quiz-section");
var highScoreScreen = document.querySelector("#highscore-section");
var highScoreDisplay = document.querySelector("#highscore-display-section");
var initialsEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback");

var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#choices");

// create a function to start the game
function StartQuiz() {
    // hide start screen
    debugger;
    titleScreen.setAttribute("class", "hide");

    // un-hide questions section
    quizScreen.setAttribute("class", "show");

    // start timer
    timerId = setInterval(tick, 1000);


    // show starting time
    timeEl.textContent = time;

    getQuestion();
}

// subtract seconds from the timer
function tick() {
    // update time
    time--;
    timeEl.textContent = time;

    // check if time has ran out
    if (time <= 0) {
        quizEnd();
    }
}

function getQuestion() {
    // get current question object from array
    var currentQuestion = questions[currentQuestionIndex];

    // update the title with the current question
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;

    //clear out previous question choices
    choicesEl.innerHTML = "";

    // loop over the multiple choice answers
    currentQuestion.choices.forEach(function(choice, i) {
        // create a new button for each choice
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", choice);

        choiceNode.textContent = i + 1 + ". " + choice;
        
        // attach the click event listener to each choice
        choiceNode.onclick = questionClick;

        // display on page
        choicesEl.appendChild(choiceNode);
    });
}

// on click of the answer button, either generate a new question after or end quiz if on the final question. Also deduct time from timer when wrong answer was selected. 
function questionClick() {
    // check if user answered incorrectly
    if (this.value !== questions[currentQuestionIndex].answer) {
        //subtract 15 seconds from time
        time -= 15;

        if (time < 0) {
            time = 0;
        }

        // display new time on page
        timeEl.textContent = time; 

        feedbackEl.textContent = "Wrong! The correct answer is:   " + questions[currentQuestionIndex].answer;
    } else {
        feedbackEl.textContent = "Correct! The answer is:   " + questions[currentQuestionIndex].answer;
    }

    // flash feedback (right/wrong) on the page for a second
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
        feedbackEl.setAttribute("class", "feedback hide");
    }, 5000);

    // proceed to the next question
    currentQuestionIndex++;

    // check if question array is empty
    if (currentQuestionIndex === questions.length) {
        quizEnd();
    } else {
        getQuestion();
    }
}

// Quiz ends
function quizEnd() {
    // timer halt
    debugger;
    clearInterval(timerId);

    // show end screen
    var highscoreSectionEl = document.querySelector("#highscore-section");
    highscoreSectionEl.setAttribute("class", "show");

    // show final score
    var finalSecoreEl = document.querySelector("#final-score");
    finalSecoreEl.textContent = time; 

    // hide questions section
    quizScreen.setAttribute("class", "hide");
}

// Saving High Score
function saveHighScore() {
    debugger;
    // get the value of the input box for player initials
    var initials = initialsEl.value.trim();

    // ensure that the player enter a value not null 
    if (initials !== "") {
        // retrieve saved values from the localStorage, else, set to empty array
        var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

        // format new score object for the current user
        var newScore = {
            score: time,
            initials: initials
        };

        // save value to the localStorage
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));

        // move on to the next page
        window.location.href = "highscore.html";
    }
}

function checkForEnter(event) {
    // "13" for the Enter Key
    if (event.key === "Enter") {
        saveHighScore();
    }
}

// perform when the user clicks button to submit his initials
submitBtn.onclick = saveHighScore;

// perform when the user clicks button to start quiz
startBtn.onclick = StartQuiz;

initialsEl.onkeyup = checkForEnter;
