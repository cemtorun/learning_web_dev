# Section 7: Bootstrap

Note: this chapter uses the 3rd version of bootstrap and not the 4th. Next units will use the 4th.

## What is Bootstrap

HTML, CSS and JS framework for developing responsive, mobile first projects on the web.

- All Bootstrap is one file of CSS and one of JS.
- Helps us make website quickly.
- Has built buttons and forums that we can just pick and plug.
- Really easy to prototype sites with bootstrap.
- If building more complex sites we can mask that we are using bootstrap by just modifying and adding things, changing colors and fonts, etc.
- Bootstrap is great for its grid system.
- Bootstrap expo to see how websites use it.

## Adding Bootstrap to a Porject

Download bootstrap, and in the CSS file the only important one is bootstrap.css (bootstrap.min.css is the same but takes up less size and is easier to load.)

- its just alot of classes and we can use those classes inside our applications
- also just use a link to a hosted version of the css thats the same thing but instead of downloading now we link that CDN (Content delivery network) to our html, just change the link tag from bootstrap.css to the url given.

Buttons

- use the btn class followed by a type
  - `<button class="btn btn-success">Click Me!</button>`
- add button size classes
  - `<button class="btn btn-success btn-sm">Click Me!</button>`
- button for adding a link
  - `<a href="https://getbootstrap.com/" class="btn btn-info btn-lg">It's Bootstrap!</a>`
- can make buttons look active vs inactive
  - `<button class="btn btn-success btn-sm active">Click Me!</button>`
  - `<button class="btn btn-success btn-sm disable" disabled="disabled">Click Me!</button>`

To overwrite styles we can just overide them by adding something to the CSS. Below would be in HTML.

```css
    <style type="text/css">
        .btn-danger {
            background: orange
        }
    </style>
```

## Forms and Inputs

Jumbotron is a large "Welcome and Hello" to a website.
We can create a div with class container around anything to center it (with maybe some spacing)
Can put any text or anything inside a container to quickly center something.

Forms:

- bunch of types of forms
- `form-group` groups text and makes nice spacing
- `form-control` makes the input boxes look good
- a inline form is just a horizontal form without `form-inline`

## Nav Bar

Nav bar super important for everything.
Bootstrap semantics is not very descriptive. Alot of the variables and their meanings don't really relate to what it does. Semantic UI is a framework that helps with that but not as widely used.
Hamburger menu is like the stack icon you can click to see the entire navbar options vertically.

The dropdown and the hamburger, if you want to click it you also need js so you need to either get that file or include it as a src file. To use js we also need jQuery, so we now have to include that cdn in the html.

- the cdn for jQuery needs to come before the cdn to the bootstrap js because the js relies on jQuery

**When making a navbar just copy the bootstrap one, and then play around with it and remove things you dont want and add additional pieces you do want.**

## The Grid System

Number one reason people use bootstrap.

Acts as the skeleton of our entire application.
Let's use divide the width of the screen into pieces and pick how many pieces we want our elements to take up.

Every container in bootstrap can be divided into 12 different columns. Using the grid system, we can pick how many of those 12 units each element should take up.

- any time we use the grid system in bootstrap we need to define it within a container as a class inside a div.

Summary:

- 12 units per row (can nest to get more)
- 4 sizes(lg, md, sm, xs)
  - create breakpoints that make stuff responsive by reassigning at any of the breakpoints
  - mobile is stacked 1 over another usually, looks best b/c phone is small width

Creating a div with class thumbnail is CRUCIAL for keeping images within the bounds that you want them to be in. W/o it the image will just take up whatever size it is. Thumbnail class within a div makes sure it is the same size as the column that comes before it.

Font awesome is a library that has bare icons, way more than bootstrap.

- with this we treat these icons as fonts, so if we want to change the color we change the color, if we want to change the size we change the font size, etc (aka treat exactly as a font)

Add this line to make it responsive for mobile:

```css
<meta name="viewport" content="width=device-width, initial-scale=1">
```
