# Section 18: Intro to jQuery

## What is jQuery

jQuery is a DOM manipulation library.

- most popular JS library
  - library is we can take someone else's code with a bunch of methods and properties that we can add to our own project and use
- helps us do things with DOM, and helps us do it faster

## Why use jQuery

youmightnotneedjQuery is a website with differences b/w jQuery and normal JS DOM manipulation.

Why use:

- fixes "broken" DOM API (not broken anymore)
- brevity and clarity
- ease of use
- cross-browser support
- AJAX (subset of features)
- lot's of people use jQuery

Why not use:

- DOM API is no longer "broken" (didn't have things like querySelector before)
- everything you can do with jQuery, you can do w/o it
- it's an unnecessary dependency, too heavy a tool especially if your using it just for animations
  - too much weight
- performance could be an issue
- lots of people moving away from jQuery!

Colt: It's worth knowing anyway.

- vanilla JS is refered to as writing JS w/o jQuery
- knowing both gives you a better toolbox and better understanding of concepts

## Selecting jQuery

With regular DOM manipulation in vanilla JS, we can select and manipulate. We can do the same things in jQuery.

Selecting with jQuery

- Selecting with jQuery is very similar to querySelectorAll, in that we provide a css style selector and jQuery will return all matching elements
- so many ways of selecting in vanilla JS but in jQuery its just the $

```js
- $("selectorGoesHere") // with css style selectors
- $("img") // all image tags
- $(".sale") // all elements with class sale
- $("#bonus") // element with id bonus
- $("li a") // all elements with anchor tag inside a li
```

To access elements once selected we need to select the index, even if theres only 1.

- jQuery selector returns a list even if theres only 1 element
- `$("h1")[0]`

### Manipulating Style

The .css() method is jQuery's interface to styling.

- select then manipulate
`$(selector).css(property, value)`

```js
// select element with id special and give it a border
`$(#special).css("border", "2px solid red");`
```

```js
// can also pass in an object with styles

var styles = {
    backgroundColor: "pink";
    fontWeight: "bold";
};

$("#special").css(styles);
```

We can also style multiple elements at once.

```js
// select all li's and make them yellow
$("li").css("color", "yellow");

// select all elements with class "big"
// and give them an orange border
$(".big").css("border", "1px dashed orange");
// .css applies it to list of lis
// to do this in vanilla JS need to loop through all lis, jQuery dont need loop
```

## Text and HTML

Common jQuery methods:

- val()
- text()
- attr()
- html()
- addClass()
- removeClass()
- toggleClass()

```js
// .text() is the jQuery version of .textContent in vanilla JS
$("h1").text();

// can also update text with it
$("h1").text("New H1!");

// returns all text of current element and any child elements within that element, i.e. for lis in uls
$("ul").text()

// same as above but no spaces
$("li").text()

// updates all the lis to hello, would need for loop in vanilla JS
$("li").text("Hello!")
```

```js
// .html() works the same as vanilla JS's .inner_html()
// retreives html the inner html of the ul
$("ul").html();

//update html content to be a new li, changes ul to have only 2 lis
$("ul").html("<li>Li1</li> <li>Li2</li>");

// since theres multiple lis, it will update all lis to new content
$("li").html("<a href='#'>random link</a>");
```

## Attr and Val

Attr is used to retrieve the value of an attribute.

- gets the attribute for the first element in the set of matched elements, retreive or set
- get info or set by passing in an addtional argument method
- 1 argument of attribute to get, 2 arguments for attritube and value to set

```js
// change image src (can also be url), used to get or set new attr
// makes all image this new pic, or just 1 if theres only 1
$("img").attr("src", "new_image.png")

// change value of type attr, changes to color input
$("input").attr("type", "color")

// changes the first img tag to new pic
$("img:first-of-type").attr("src", "new_image.png")

// changes the last img tag to new pic
$("img").last().attr("src", "new_image.png")
```

Val helps us extract the value from an input.

- .val() in jQuery is the same value in html
- .val() works on any elements that have a value attribute, not just inputs
  - that can be like checkboxes, and colors and dropdown menues, any sort of input

```js
//retreives data from type input
$("input").val()

// can also update the input, happens when we want to clear the value for example
$("input").val("Hello")

```

## Manipulating Classes

Think back to classList property in html with .add(), .remove() and .toogle().

- here are the analogues for those in jQuery
- can do multiple at once

```css
/* sample class for class example */
.wrong {
    color: red;
    background: pink;
}

.correct {
    color: green;
}
```

```js
// adds correct class
$("h1")addClass("correct");

// remove
$("h1")removeClass("correct");

// can also add to multiple lis at once, a whole set of elements
// w/o  jQuery we would need a for loop, dont need any of that here
$("li").addClass("wrong");

// toggle
$("li").toggleClass("correct");
$("li").first().toggleClass("correct"); // toggle first li, same as li:first-of-type
$("li").last().toggleClass("correct"); // toggle last li
```

Key thing about jQuery is that we can act on a collection of elements w/o having to right an explicit for loop.
