# Section 16: Advanced DOM Manipulation

## Introduction to Events

Events are everywhere:

- click on buttons
- hover over link
- drag and drop
- pressing arrow keys or enter

This process works by selecting an element and then adding an event listener.

- listen for a click on `<button>`
- listen for a hover event on `<h1>`
- listen for a keypress event on text input
- we select an element and the manipulation is when us adding an event listener to the thing we select
  - can have more than one listener on each element and they run in order
  - can iterate through a list for example and change the color if clicked
    - instead of `li[i]` can use `this` keyword
    - `this` similar to `self` in python

**To add a listener, we use a method called `addEventListener`.**

```js
element.addEventListener(type, functionToCall);
```

```js
var button = document.querySelector("button");
// type of event we want to listen for and code to run when event happens
// function isnt run, right away, its called a callback, only run once the event occurs
button.addEventListener("click", function() {
    console.log("SOMEONE CLICKED THE BUTTON");
});
```

Also the function doesnt have to be anonymous, can use one that was made before hand

- use the anonymous form, unless you use that function in multiple places

```js
button.addEventListener("click", changeText) // where changeText was already defined, no parentheses
```

`variable = !variable` to toggle stuff

## Other Types of Events: Todo List

We've encounter the click event and the change event.

- only use really like 5-6 maybe 10 of them that are more common

Two keys ones involved with hovering are mouseover and mouseout.

- mouseover, the event happens starts right when the move is over, not continuously firing, only when the hover begins and it stays that like, even when you go away it stays with whatever the function called
- to make the event stop when we stop hovering, we need mouseout which is pretty self explantory in this case, it then changes the condtion when the mouse exits hover
- then we can loop over any or all li elements and loop through and modify each of them, cant just do the ul element but itself, and make sure to use `this` for the actually manipulation after you use `li[i]` for the actual selection

```js
firstLi.addEventListener("mouseover", function() {
    firstLi.style.color =" green" // better to make classes for this, make a class and put class in css
});

firstLi.addEventListener("mouseout", function() {
    firstLi.style.color = "black" // better to make classes for this, make a class and put class in css
});
```
