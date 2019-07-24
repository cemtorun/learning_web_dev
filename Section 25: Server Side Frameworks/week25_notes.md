# Section 25: Server Side Frameworks

## Introduction to Express

We've used a couple of libaries like jQuery and Bootstrap (cat-me, knock-knock too).

Frameworks are similar; they are code that someone else wrote (usually alot of people and alot more code) that we can use in our application. But the way that we use them is different.

The defining difference is "inversion of control".

- library is something you are in control of, if you want to use one or two or ten methods you can do that
- but with a framework, you give up control, decisions are already made for you and that you have to abide by
  - gives you a basic groundwork, so you can focus on what makes your application unique and not all the homogenous boring stuff to set it up

Express is a web development framework.

- other web development frameworks could be flask, django, rails, etc

Why Express?

- by far the most popular node web development framework
- two terms for frameworks: heavy-weight and light-weight
  - these two refer to how much of the work does the framwork do for you vs how much you have to do yourself
  - heavy-weight you write less code, light-weight you are doing more of the work
  - express is a very light-weight framework, it doesnt hide things from you, you know exactly what you are doing
  - unlike rails, you can make apps fast but alot of the function is abstracted away so people dont always understand what rails is doing
- express is a web framework for node.js
  - unopionated: lets you do what you wants where rails in very opinioniated, express has more freedom

## Our First Express App

Routes are the code that is reponisble for listening and recieveing request and deciding what to send back.

- listeing for get on home page (/)
- listen for post of /create
- etc

```js
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
```

## The Package.json

### What does the package.json file do

- everysingle npm package has a file called package.json
  - json: javascript object notation
  - its a datatype, a way to format text in a file to represent strucutre
- this package.json is file that contains all the meta data about the package
  - authors, contributer, license, dependencies (files that it needs to run)
- depencies work like instead of buying all the ingredients and uploading them, you just give a recipe
- package.json describes what is need to run the package instead of just sending all libaries and packages require to run the main package
- depencies are the most important part of the package.json

### What does the `--save` mean

- it will take the package name and version and save it into the package.json file if we have one.
- it installs it and takes a libary/framework and just saves/adds it to a the package.json in your directory if there is not one
- this is good for when we are creating our own web apps to make a list of depencies that the web app depends on
- can add this flag to any package when installing to add to package.json

### npm init

- helps you create a package.json file, interactively
- we will create our own package.json outlining the frameworks/libaries we needed

### Nodemon

Don't have to restart server everytime you change to one of the backend files.

- run nodemon app.js instead of node.js
- `npm i -g nodemon` to install
  - install global (on server on goorm)
- it automatically restarts server when you save the backend file

## Route Params

### Splat or start route matcher (*)

If we want to have a catch all that redirects the user to a page when the url doesnt exist

```js
// runs when the app gets a get request to any url besides /, /bye, and /dog
app.get("*", function(req,res){
    res.send("site does not exist ggwp");
});
```

Order of routes matters, this catch all must come last. The rule is the first route that matches a given request is the only route that will be run.

- 1 request = max 1 run.
- "*" is like else, its that catch all condition
- its like 1 big if statement

### Route Parmas

Instead of defining a route for every single url, we could define a pattern.

- reddit has thousands of subreddits and it would be very repetitive just to have /r/soccer, /r/fitness, written a thousand times
- we can use route parameters or route variables to match patterns, also called path variables

```js
// This colon tells express not actually character for character subredditName but rather to make it a pattern looking for /r/ then any subreddit name
app.get("/r/:subreddit", function(req, res){
    res.send("Welcome to my subreddit!");
});
//Put a colon in front of anything we want to be a variable.
//The number of "/" must match what we are listening for
```

How do we access this data from the route handler?

```js
app.get("/r/:subredditName", function(req, res){
// req contains all the info about the incoming request, can use it to access the req
// params object contains all the parameters given and their corresponding values (req.params to console.log)
    var subreddit = req.params.subredditName;
    res.send("Welcome to the " + subreddit + " subreddit!");
});
```
