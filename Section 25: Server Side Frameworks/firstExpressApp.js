var express = require("express");
var app = express(); // execute and save to varaible called app

// when you go to / you get hi, when you go to /goodbye you get goodbye, /dog = meow

// define first route
// for get first argument is the path, then we this call back function to run
// req and res can be called any variable name, this is just the norm, req and res are objects
// req is an object that contains all the information about the reques that was made, what triggered this route
// res is a object that contain all the information about what we are going to respond with
app.get("/", function (req, res) {
    res.send("hi there");
});

app.get("/bye", function (req, res) {
    res.send("goodbye");
});

app.get("/dog", function (req, res) {
    res.send("meow");
});
// this tells the app to listen for requests to the server at port 3000 (this starts the start server)
// port to listen on and call back function
app.listen(3000, function () {
    console.log("server listening on port 3000");
});

// control c to stop running server
// to run from url, go to project, running url and port, use the same port as in the code and make a url and it works!
// anytime you make changes to the code, you must restart the server
// any console.logs appear in node control, not on website, this makes it so you can get console.logs when a request is made to a certain site