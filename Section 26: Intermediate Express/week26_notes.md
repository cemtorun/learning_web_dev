# Section 26: Intermediate Express

## Templates and EJS

We can write HTML in a seperate file and send that file back in the response rather than just some normal text.

When using npm init, be sure not to name the project (or the folder that the project lives inside of) the same as any of the node packages being used in the project itself.

### Using res.render() to render HTML from EJS file

```js
var express = require("express");
var app = express();

// need to npm install ejs --save
app.get("/", function(req,res){
    // we can send text back with tags in html format but we dont want to this for an entire file
    res.send("<h1>Welcome to the homepage!<h1>");
    // but instead of sending back some text with res.send, we can do res.render to allow a page to render with a given file
    // we can also send html files back but we dont write plain html files, they are not static, but dynamic
    // dynamic html files are called templates
    res.render("home.html");
    // instead we use ejs, which is embedded javascript
    // when a get req is made to /, our code will render a file called home.ejs
    res.render("home.ejs");
    // we also have to create a director called views that express will look for
    // but again this sends back the same page
});


// here can get different templates back depending on what the get request was
app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love.ejs"); // automatically looks in views directory
    // we have to fill this logic in and this is important bec we can use this to fill in data from a database or user input

app.listen(3000, function(){
    console.log("server is listening!");
});
```

### What is EJS and why do we use it

EJS stands for embedded JavaScript and lets us embeed JS code(variables, if statements loop) inside html
To tell EJS that we have JS code and not html code, we use: `<%= %>`

- and whatever goes between those two brackets, will be treated as JS

### Passing variables to EJS template

```html
<h1>You fell in love with <%= thingVar %></h1>
<p>ps: this is the love.ejs file</p>
```

```js
app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar: thing}); // in the template thingVar should be connected to thing
});
```

## EJS: Conditionals and Loops

### EJS Control Flow

Loop thorugh all posts in db, and for each make a div of class entry and file in the required information - for reddit for example.

- Can also it some distinct with grouping like if the link is twitter.com, add the twitter logo.
- if video make the video button, etc

### If Statements in EJS Files

Doesn't matter where the if statement ends, if a line uses JS it must have the funny open and close brackets.

Had to take away the equal signs:

there are two different types of tags in EJS (third we we will later)

- <%= %>
  - the equal sign makes it so whatever is returned is added to the html
- <% %>
  - this logic is purely logic, we dont want the `if(x=5)` to be added to the html
  - this isnt supposed to display
  - dont want brackets in the html and random stuff like that
  - if statements and loops we dont use the equal sign

```js
<h1>
    You fell in love with: <%= thingVar %>
</h1>

<% if (thingVar.toLowerCase() === "rusty"){ %>
    <p>good choice, rusty is the best</p>
<% } else { %>
    <p>that thing name not Rusty, YOU WRONG!</p>
<% } %>
```

### Loops in EJS Files

```js
<h1>
    The Posts Page.
</h1>
//runs 3 times
<% for(var i = 0; i < posts.length; i++) {  %>
    <li>
        <%= posts[i].title %> - <strong> <%= posts[i].author %> </strong>
    </li>
<% } %>


<% posts.forEach(function(post) { %>
    <li>
        <%= post.title %> - <strong> <%= post.author %> </strong>
    </li>
<% }); %>
```

## Serving Custom Assets

### How to include public assets

Can include style tages on certain pages, like changing body on a certain template to purple

- this works but its not the right way to do it
- have to do in all templates (ejs) files to have it on all pages
- two main uses: code in being repeated, and 2, we are using the style tag
  - want to use external sytyle sheet

`<link rel="stylesheet" href="app.css">`

When we start a web server with express, it doesnt automatically know that this css file or any other file should be incorperated.

- to search for views directory but anything else isnt

`app.use(express.static("public"));`

- this line tells express to serve the contents of the public directory

Now we can just copy this link tag and put it on any ejs pages where we want this css to be applied.

- can have multiple stylesheets and have different pages link to different styles sheets
- all just must be in the public directory

Small thing:

- we can also tell express we will be using ejs so we dont have to have .ejs at the end of the file names
- `app.set("view engine, ejs");`

## Using partials to dry up our code

We also don't have the general html boilerplate on every ejs file, but we dont want to just type it on every page

We can use partials which are just files that we can write and include in other templates.

- we make a new directory inside views and call it partials
- then we make a header.ejs and footer.ejs where we just copy paste the general header and foot html doctype
- we use these on the pages were we want the template/partials
  - `<% include partials/header %>`
  - `<% include partials/footer %>`
- now we can put the style tag `<link rel="stylesheet" href="app.css">` inside this header.ejs
- BUT WE need to make it /app.css for the css to apply
- / makes it so that it looks for app.css in the same directory, we want it too look for in root directory
- bc app.css is in public but the header is is one folder deeper so we need to go back to route to access app.css
- partials great for re-using code, can use for navbar or any elements you want repeated across many pages

## Post Requests

We write post routes with app.posts().

npm install body-parser --save to install body-parser.

res.redirect() key.

See project for examples.
