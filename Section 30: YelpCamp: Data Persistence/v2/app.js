var express = require("express"), 
	app = express(),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose");
// above is another way to declare all ther variables in the start, don't need to write var every single time

// remember this dynamically creates the db if it doesnt exist
mongoose.connect("mongodb://localhost/yelp_camp", { useNewUrlParser: true }); 

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

//setting up schema

var campgroundSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String
});

// this makes the collection collection name campgrounds so we have db.campgrounds as the collection of elements within the db yelp_camp
var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
// 	{
// 		name: "Snow Land", 
// 		image:"https://images.unsplash.com/photo-1539712258047-fd138a7e6737?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
// 		description: "Only snow, so cold, brrrrrr."
// 	},
// 	function(err, newCampground){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			console.log("new CG added!");
// 			console.log(newCampground);
// 		}
// 	});

app.get("/", function(req, res){
	res.render("landing");
});

//INDEX ROUTE, SHOW ALL CAMPGROUNDS
app.get("/campgrounds", function(req, res){
	//get all campgrounds from db
	Campground.find({}, function(err, allCampgrounds){
		if(err){
			console.log(err);
		} else {
			// if no error, take all the campgrounds from db "allCampgrounds" and send them to the campgrounds.ejs file
			// console.log runs everytime you refresh/run the campgrounds page
			console.log("retrieved all CGs from database");
			// line below means, render campgrounds.ejs, feeding in allCampground from db, into the campgrounds_list variable in campgrounds.ejs
			res.render("index", {campgrounds_list: allCampgrounds});

		}
	});
});

// CREATE ROUTE, ADD NEW CAMPGROUND
app.post("/campgrounds", function(req, res){
	// redirect to campgrounds page
	var name = req.body.name; // body-parser allow us to access the body and its relevant attributes that we created
	var image = req.body.image; // still need to grab name and image
	var description = req.body.description;
	var new_campground = {name: name, image: image, description: description};
	Campground.create(new_campground, function(err, fromForm){
		if(err){
			console.log(err);
		} else {
			console.log("new CG added via form!");
			res.redirect("/campgrounds"); // default of redirect is to redirect as a get request
		}
	});
});

// NEW ROUTE, SHOW FORM TO CREATE NEW CAMPGROUND
app.get("/campgrounds/new", function(req, res){
	// renders a form
	// redirects information to campground in order to update the existing campgrounds
	res.render("new.ejs");
});

// SHOW ROUTE, SHOWS MORE INFO ABOUT CAMPGROUND
// import that is below /new or else we can never reach campgrounds /new
app.get("/campgrounds/:id", function(req, res){
	// find campground with given id
	Campground.findById(req.params.id, function(err, foundCampground){
		if(err){
			console.log(err);
		} else {
			// render show template for the campground
			console.log("no error wooooooo!");
			console.log("Found campground:", foundCampground);
			res.render("show", {campground: foundCampground});

		}
	});
});

app.listen(3000, function(){
	console.log("yelpcamp v2 running on port 3000");
});