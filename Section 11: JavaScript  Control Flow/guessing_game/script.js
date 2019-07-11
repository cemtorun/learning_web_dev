var guess = prompt("Guess a number!");
var ans = 7;

// the prompt is taken in as a string not a number
// if you write "typeof guess" in you get that its a string
// Number(guess) makes the guess a number instead of a string 
// would do it like: if (Number(guess) < ans) { 
// or var guess = Number(prompt("Guess a number!"));
// or guess = Number(guess)


if (guess < ans) {
    alert("Too low! Try again");
}
else if (guess > ans) {
    alert("Too high! Try again");
}
else {
    alert("You guessed it!!!");
}