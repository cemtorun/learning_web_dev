var button = document.querySelector("button");
var body = document.querySelector("body");

button.addEventListener("click", function () {
    body.classList.toggle("new_color");
});

// must make sure js in linked AND css is linked bc ur using css here
