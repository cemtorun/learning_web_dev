var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/references_demo", { useNewUrlParser: true });


// post (title, content)
var postSchema = new mongoose.Schema({
	title: String,
	content: String
});
var Post = mongoose.model("Post", postSchema);


// user (email, name)
var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	// post in an array of object ids, mongoose object id belonging to a post
	posts: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: Post 
		}
	]
});
var User = mongoose.model("User", userSchema);

// User.create({
// 	name: "Cem",
// 	email: "123own123@gmail.com"
// });

// Post.create({
// 	title: "cem loves...",
// 	content: "food!"
// }, function(err, post){
// 	console.log(post);
// });

// Post.create({
// 	title: "cem loves...",
// 	content: "SUSHIIII!"
// }, function(err, post){
// 	User.findOne({name: "Cem"}, function(err, foundUser){
// 		if (err) {
// 		console.log(err);
// 		} else {
// 			foundUser.posts.push(post);
// 			foundUser.save(function(err, userData){
// 				if (err){
// 					console.log(err);
// 				} else {
// 					console.log(userData);
// 				}
// 			});
// 		}
// 	});
// });

// will get all the posts for Cem and .exec starts the query
// and will return the user Cem with all fields for post and not just the id which would happen if we just find()
User.findOne({name: "Cem"}).populate("posts").exec(function(err, user){
	if(err){
		console.log(err);
	} else{
		console.log(user);
	}
});

