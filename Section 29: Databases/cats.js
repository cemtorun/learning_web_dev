var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app", { useNewUrlParser: true }); 
// if there is cat_app it will use, if there isnt it will make a cat-app db

// tells js to define a cat as this, still noSQL, it just provides structure to data but we can still add more attributes if we wanted to.
var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});

// took the schema (the pattern) and made into model then saved into Cat, Cat object that we can use to write commands
// Cat has the methods we want for interacting with mongo
// "Cat" represents the singular element in the collection, makes the collection name the plural version of the singualr element
// cats is a collection, cats with lower case c is a collection within the cat_app db
// a plural (lowercase) collection will be created in mongodb for the model that you create with mongoose. So Cat becomes cats.

var Cat = mongoose.model("Cat", catSchema);


// adding a new cat to db
// this doesnt add to db yet
// variable name george doesnt impact anything at all 
// BETTER WAY BELOW
var george = new Cat({
	name: "Geg",
	age: "14",
	temperament: "Fat"
});

// this adds to db
// using callback function to make sure everything is working right
// err, and the item that is saved, err = potential error, hoepfully its empty, otherwise print cat
// george is what we have in js that we are sending to the db, cat is what is added and being sent back from the database.
// BETTER WAY BELOW
george.save(function(err, cat ){
	if(err){
		console.log("something went wrong!!! :O");
	} else {
		console.log("it worked, saved cat to db!");
		console.log(cat);
	}
});

// this creates a new element all at once, same thing as above two but all in 1 step. dont need to make new then save, can od it all at once
Cat.create({
	name: "Joy",
	age: 15,
	temperament: "Jolly"
}, function(err, newCat){
	if(err){
		console.log("something went wrong!!! :O");
	} else {
		console.log("new cat added yay!!");
		console.log(newCat);
	}
});


// retrieve all cats from db
// in callback the variables names dont matter, its whatever we want
// empty object bc we want all cats
// callback executed when code is done
Cat.find({}, function(err, cats){
	if(err){
		console.log("something went wrong!!! :O");
	} else {
		console.log("all da cats");
		console.log(cats);
	}
});
