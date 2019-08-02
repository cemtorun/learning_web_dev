var bodyParser = require("body-parser"),
mongoose       = require("mongoose"),
express        = require("express");
app            = express();

// APP CONFIG
mongoose.connect("mongodb://localhost/restful_blog_app", { useNewUrlParser: true }); 
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); // for style sheet?

// MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
	title: String,
	image: String,
	body: String,
	created: {type: Date, default: Date.now} // created should be a date, which is now
});

var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
// 	title: "test",
// 	image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
// 	body: "super cute puppy"
// 	// dont need to pass created, bc it has a deafult
// });

// RESTful ROUTES

app.get("/", function(req, res){
	res.redirect("/blogs"); // common for route to just redirect to index, like on reddit
});

app.get("/blogs", function(req, res){
	console.log("retrieved all from database");
	Blog.find({}, function(err, blogs){
		if(err){
			console.log(err);
		} else {
			res.render("index", {blogs: blogs}); // represents index.ejs
		}
	});
});



app.listen(3000, function(){
	console.log("listening for the blog app!");
});