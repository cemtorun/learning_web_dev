var p1 = document.querySelectorAll("button")[0];
var p2 = document.querySelectorAll("button")[1];
var resetButton = document.querySelectorAll("button")[2];
var p1Display = document.querySelectorAll("span")[0];
var p2Display = document.querySelectorAll("span")[1];
var numInput = document.querySelector("input");

var maxScoreDisplay = document.querySelector("p span");

// can do most of above with giving id too

var p1Score = 0;
var p2Score = 0;
var maxScore = 5;
var gameOver = false;

//game has two states, game and game over

p1.addEventListener("click", function () {
    if (!gameOver) {
        p1Score++;
        p1Display.textContent = p1Score;
        if (p1Score === maxScore) {
            p1Display.classList.add("winner");
            gameOver = true;
        }
    }
});

p2.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++;
        p2Display.textContent = p2Score;
        if (p2Score === maxScore) {
            p2Display.classList.add("winner");
            gameOver = true;
        }
    }
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    gameOver = false;
    p1Display.classList = ""; // these remove all classes, .remove only removes one class
    p2Display.classList = "";
}

resetButton.addEventListener("click", function () {
    reset(); // refactored this bc we use it more than once
});

// change event is much better, runs anytime the value changes within the box
numInput.addEventListener("change", function () {
    //numInput = numInput.value
    maxScoreDisplay.textContent = this.value // keyword this refers to the element before addEvent (numInput)
    maxScore = Number(this.value); // Number() casts as number
    reset();
});


