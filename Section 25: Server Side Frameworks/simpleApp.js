// workflow
// 1. make npm init, entry point app.js
// 2. Make app.js
// 3. install express (with npm install express --save, downloads and adds to dependencies)
// 4. open app.js and require express and execute to variable called app
// 5. set up the listen and bingo (tells express + the app to listen on a particular port)

var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animalName", function(req, res){
	var animal = req.params.animalName.toLowerCase();
	var sounds = {
		pig: "Oink",
		cow: "Moo",
		dog: "Woof",
		cat: "Meow",
		goldfish: "..."
	};
	var sound = sounds[animal];
	
	if (sound === undefined){
		res.send("Animal does not exist");
	}
	res.send(animal + " says " + sound);
});

app.get("/repeat/:word/:times", function(req,res){
	var word = req.params.word;
	var times = req.params.times;
	var output = "";
	for (i = 0; i < times; i++){
		output += word + " ";
	}
	res.send(output); // gotta be outside loop cus res.send would exit the loop
});

app.get("*", function(req, res){
	res.send("Yea yea ... this URL doesnt exist ... LOSER!");
});

app.listen(3000, function(){
	console.log("App is running on port 3000!");
});