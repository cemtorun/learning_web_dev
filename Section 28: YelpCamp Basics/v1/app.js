var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

var campgrounds_list = [
		{name: "Salmon Creek", image:"https://images.unsplash.com/photo-1484960055659-a39d25adcb3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"},
		{name: "Granite Hill", image:"https://images.unsplash.com/photo-1528433556524-74e7e3bfa599?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"},
		{name: "Tobermory", image:"https://images.unsplash.com/photo-1455763916899-e8b50eca9967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"},
	];	

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	res.render("campgrounds", {campgrounds_list: campgrounds_list});
});

app.post("/campgrounds", function(req, res){
	// get data from form and add to array
	// redirect to campgrounds page
	var name = req.body.name; // body-parser allow us to access the body and its relevant attributes that we created
	var image = req.body.image;
	var new_campground = {name: name, image: image};
	campgrounds_list.push(new_campground);
	res.redirect("/campgrounds"); // default of redirect is to redirect as a get request
});

app.get("/campgrounds/new", function(req, res){
	// renders a form
	// redirects information to campground in order to update the existing campgrounds
	res.render("new.ejs");
});

app.listen(3000, function(){
	console.log("yelpcamp running on port 3000");
});