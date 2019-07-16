# Section 15: DOM Manipulation

Be sure to include your JavaScript code at the bottom of the HTML document, right before the closing `</body>` tag.

- The HTML will need to have loaded before the JavaScript is run, otherwise the JavaScript will throw an error because the HTML that it is trying to select and manipulate doesn't exist (yet).

## Introduction to the DOM

The DOM helps with building:

- games
- scrolling effects
- dropdown menus
- form validations
- interactivity
- animations

## Defining the DOM

DOM: Document Object Model
DOM is the interface between your JavaScipt and HTML+JSS

- bunch of JS methods and objects that we can use to interact with our HTML and CSS

The browser turn every HTML tag into a JS object that we can manipulate.

- everything is stored inside the *document* object
- browser dispaly the html and css but in the background makes the DOM, this model of every single element of html with a javascipt object, object representing this a tag and this h1 tag, etc
- **browser takes each element and turns it into a JS object**
- our entire model of the html and css is called the document
  - this document is a js object with other objects and properties

## Select and Manipulate

The process is to select and element and then manipulate it.

- change the h1 color using JS
  - first we select the h1 and save to a variable
    - we created a variable h1 to select the h1s in the html
    - querySelector return an object that represents the h1s
  - next we can now manipulate the h1 we selected
    - style property that is also a huge object with color as a property of style

```js
var h1 = document.querySelector("h1");
h1.style.color= "pink";
```

- select the body and change its color every second

```js
var body = document.querySelector("body"); // select the body, gives the object body as a var body
var isBlue = false;

setInterval(function(){ // manipulate
    if (isBlue) {
        body.style.background = "white";
    } else {
        body.style.background = "3498db";
    }
    isBlue = !isBlue; // makes is blue the opposite of what it is
}, 1000); //ms
```

SELECT AND MANIPULATE!

## Important Selector Methods

There are different ways of selecting elements using JS and the DOM.

Entire DOM all live inside the document object.

- the document object is the root node of it all
- `document.URL` gets us the url of the webpage
- `document.links` gets us all anchor tags on page
- `document.body` gets us the entire body
- `document.head` gets us the entire head
- this is important bc all the selectors/methods we are going to learn all live inside the document object so it will always be `document.something`

The document comes with a bunch of elements for selecting elements.

- `document.getElementById()`
  - takes in an id name and returns element that matches that id
    - pass in a single string argument "footer", the name of the idea
    - get ELEMENT, will return 1 element only
  - in html ids `id=footer` can only appear 1 time on a page
  - we can then return this element with the id we searched for by just assigning the selector method to a var and then just typing/calling that var `footer` in the console
    - the result that is returned is a JS object even though it looks like html
- `document.getElementsByClassName()`
  - same idea as ID but its a class now, so it returns all ELEMENTS (PLURAL) with a given class
  - a class can occur any amount of times on an html page
  - the return is a HTML collection with JS objects (but shows a nice string represent of html) for all instances of that class occuring
    - like a likeweight array, can index and get length but cant do forEach loop
- `document.getElementsByTagName()`
  - returns a list of elements that match a given tag name like li or h1
  - same as others selector above in all other ways
  - still JS objects
  - even if theres only 1 item, it returns it as an HTML collection (mini list)
- `document.querySelector()`
  - takes a CSS style selector, like anything we would use in CSS file.
    - ALWAYS ONLY RETURNS 1 ELEMENT ONLY THE FIRST ONE
    - `"#highlight"` to get id element
    - `".bolded"` to get class element
    - `"h1"` to get tag name, still only returns just one
    - can also be more specfic to select like an anchor tag inside li with class special for example
      - `"li a.special"`
    - if no match returns null
  - returns nice str represent but is still an JS object
  - DOESNT RETURN A HTML COLLECTION, ONLY 1 JS OBJECT WITH NO HTML COLLECTION
- `document.querySelectorAll()`
  - like querySelector but selects all of classes and tags but still only 1 id because there can only be 1 unique id in an html
  - since its more than one it returns the js objects in HTML collection
  - could use this one if theres only 1, but it returns the one JS object in the HTML collection

## Manipulating Style

## Manipulating Text and Content

## Manipulating Attributes
