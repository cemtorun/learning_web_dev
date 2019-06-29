# Section 7: Bootstrap

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


## The Grid System
