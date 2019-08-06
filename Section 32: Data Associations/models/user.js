var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	// post in an array of object ids, mongoose object id belonging to a post
	posts: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Post"
		}
	]
});
var User = mongoose.model("User", userSchema);

module.exports = User;