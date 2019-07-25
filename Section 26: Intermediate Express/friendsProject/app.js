var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var friends = ["John", "Suzie", "Timothy", "Me", "No one"]; // lose these friends when we restart the server

app.get("/", function(req, res){
	res.render("home");
});

app.get("/friends", function(req, res){
	res.render("friends", {friends: friends});
});

app.post("/addfriend", function(req,res){
	// makes it so we can see what the post req is sending to server
	var newFriend = req.body.newfriend; // body parser needs to see req in js form from express
	// body parser parsed express obj to js object
	friends.push(newFriend); 
	res.redirect("/friends"); //after running add friends, it also runs /friends to update the list
});

app.listen(3000, function(){
	console.log("server started wootwoot");
});