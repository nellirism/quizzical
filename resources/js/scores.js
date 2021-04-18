// Nell-e Medina Quizzical Master 
// The following are declared variables
var highScore = document.querySelector("#highscore");
var clear = document.querySelector("#clear-btn");
var goBack = document.querySelector("#return-btn");

// Event listener to clear scores 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// Retreives local stroage 
var allScores = localStorage.getItem("highscores");
allScores = JSON.parse(allScores);

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);

    }
}
// Event listener to move to index page
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});