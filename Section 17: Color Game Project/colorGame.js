var numSquares = 6
var colors = []
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1Background = document.querySelector("h1")
var resetButton = document.querySelector("#reset")
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {

    modeButtonsListenerSetup();
    squaresSetup();
    reset();
}

function modeButtonsListenerSetup() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected"); // remove from both buttons then add it back (saftey)
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            // this ternary operator does the same as a simple if
            reset();
        });
    }
}

function squaresSetup() {
    for (i = 0; i < squares.length; i++) {
        // add click listeners to square
        squares[i].addEventListener("click", function () { // call back function
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!"
                changeColors(clickedColor);
                h1Background.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?"
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickRandomColor();
    colorDisplay.textContent = pickedColor;
    h1Background.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors"
    messageDisplay.textContent = ""
    for (i = 0; i < squares.length; i++) {
        if (colors[i]) { // only loops through first 3
            squares[i].style.display = "block"; // make them visible first for when going back to hard
            squares[i].style.backgroundColor = colors[i]
        } else {
            squares[i].style.display = "none"; // none takes the display away
        }
    }
}

resetButton.addEventListener("click", function () {
    reset()
});

function changeColors(color) {
    // loop through all squares and change each color to match given color
    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color
    }
}

function pickRandomColor() {
    // GOAL IS TO PICK A RANDOM COLOR IN THE ARRAY TO MAKE THE CLICK COLOR
    // math.random picks number between 0 and 1 not including 1
    // so we do +1 but then shop off the decimal so 1.999 can only become 1 max
    // math.float removes everything after the decimal
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function randomRGB() {
    var red = Math.floor(Math.random() * 256); // 256 bc then max will be 255.9999999
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
    // needs to have space after , in order to correctly match in the clickedColor check
}

function generateRandomColors(number) {
    var arr = [];
    for (i = 0; i < number; i++) {
        var random = randomRGB();
        arr.push(random)
    }
    return arr
}