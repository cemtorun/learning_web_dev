var express    = require("express"), 
	app        = express(),
	bodyParser = require("body-parser"),
	mongoose   = require("mongoose");
	Campground = require("./models/campground")
	Comment    = require("./models/comment")
	seedDB     = require("./seeds.js")



// above is another way to declare all ther variables in the start, don't need to write var every single time

// remember this dynamically creates the db if it doesnt exist
// mongoose.connect("mongodb://localhost/yelp_camp_v4D", { useNewUrlParser: true }); 

mongoose.connect("mongodb+srv://cisac:cemtorun@cluster0-4fjcs.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true }); 

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extxended: true}));

seedDB();

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
			res.render("campgrounds/index", {campgrounds_list: allCampgrounds});

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
	res.render("campgrounds/new");
});

// SHOW ROUTE, SHOWS MORE INFO ABOUT CAMPGROUND
// import that is below /new or else we can never reach campgrounds /new
app.get("/campgrounds/:id", function(req, res){
	// find campground with given id and use that id the find the comments associated with it and populate the comment ids with the actual comment text and then execute that with the callback
	Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
		// now foundCampground also has the comments attribute populated, just need to display
		if(err){
			console.log(err);
		} else {
			// render show template for the campground
			console.log("no error wooooooo!");
			console.log("Found campground:", foundCampground);
			res.render("campgrounds/show", {campground: foundCampground});

		}
	});
});

// ===========
// COMMENTS ROUTE

app.get("/campgrounds/:id/comments/new", function(req, res){
	Campground.findById(req.params.id, function(err, campground){
		if (err) {
			console.log(err)
		} else {
			res.render("comments/new", {campground: campground}) 
		}
	});
});

app.post("/campgrounds/:id/comments", function(req, res){
	// lookup comment with that id
	Campground.findById(req.params.id, function(err, campground){
		if(err){
			console.log(err);
		} else {
			// create new comment
			Comment.create(req.body.comment, function(err, comment){
				if(err){
					console.log(err);
				} else {
					// connect new comment to that campground
					campground.comments.push(comment);
					campground.save();
					// redirect to that campground page
					res.redirect("/campgrounds/" + campground._id);
				}
			});
		}
	});

});

const port = process.env.PORT || 8080;
const ip = process.env.IP || "127.0.0.1";
app.listen(port,function(){
    console.log("Server has started .... at port "+ port+" ip: "+ip);
});
