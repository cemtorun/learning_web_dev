# Section 19: Advanced jQuery

In vanilla JS we had addEventListener.

- jQuery has a ton of methods that has to do with events
- there are 3 methods that we can use 99% of time, and especially on()
  - click()
  - keypress()
  - on()
    - on() is the most OP!

## jQuery Events: Click

### click()

- jQuery's click() method is a quick and easy way to add a click listener to element(s)

```js
//prints when item with id submit is clicked
$("#submit").click(function() { // callback function
    console.log("click worked!");
});

// alert when any button is clicked, adds to a collection of elements, ALL buttons
// would require selecting them all and then using a for loop in vanilla JS, so much easier
// jQuery does this behind the scenes by we get to write much less code, much simplier to write
$("button").click(function() {
    alert("click worked!");
});

// if we wanted to do something to the element specifically like change the background
// we cant use this like we did in vanilla js instead we use the jQuery version of this
// $(this) is a jQuery object version of this in vanilla JS
$("button").click(function() {
  $(this).css("background", "pink");
  var text = $(this).text(); // saves the text of the button
  console.log("you clicked: " + text);
});

// can use anonymous function like above or pass in a named function
```

## jQuery Events: Keypress

### keypress()

jQuery's keypress() method is a quick and easy way to add a keypress listener to element(s)

- when a use types something on a keybaord
- keydown() anytime you press a key down
- keyup() when you release a key
- keypress() fires in b/w the time you press down and release
- keydown and keyup fire when you use a modifier key like shift but keypress doesnt

```js
// listen for any keypress in any text input
$("input[type='text']").keypress(function(){ // callback function
    alert("text input keypress");
});

// if we want to do something when the user clicks a certain key, say the enter key
$("input[type='text']").keypress(function(event){ // contains information about keypress event
    // event is always passed in but we need a variable name there to capture event, can be called anything
    // event is an jQuery object, and each key as a code
    if (event.which === 13) { // if the which attribute for the event is 13, aka if its enter key
        alert("you hit enter")
    }

});
```

## jQuery Events: On

### on()

jQuery's on() works similarly to addEventListener. It let's you specify the type of event to listen for.

- by far the most used jQuery event method
- used 99% of the time
- can take the place of click() and keypress() and everything else too
- takes the type of event along with the callback function, not just the callback function anymore like keypress() and click()

```js
//alerts when any button is clicked
$("button").on("click", function(){
    alert("clicked button");
});

// double click event
$("button").on("dblclick", function(){
    alert("double clicked button");
});

// keypress event
$("input[type='text']").on("keypress", function(){
    alert("keypress");
});

// if we didnt have this, if we clicked on an h1, it would make ALL h1s purple, NEED $(this)!!!
// this with jQuery wrapper
$("h1").on("click", function(){
    $(this).css("color", "purple");
});

// make font bond when hovering over button
// only triggers ONCE, as mouse enters, doesnt keep triggering
// can do hover only is CSS dont need JS at all, with hover pseduoselector in CSS
$("button").on("mouseenter", function(){
    $(this).css("font-weight", "bold"); // stays bold
});
$("button").on("mouseleave", function(){
    $(this).css("font-weight", "normal"); // when mouse leaves it goes back to normal
});
```

Why use `.click()` vs `.on("click")`?

- click() only adds listeners for existing elements
- on() will add listeners for all potential future elements
  - will need this if things are added to the page after the page loads

## jQuery Effects

### Fadeout

```js
 // fades out immediately as the page loads
$("div").fadeOut();

// fade out the divs when a button is clicked
// fadeOut does delete element it sets the display to None
$("button").on("click", function(){
    $("div").fadeOut(1000); // 1000ms to fadeout, default is 400ms if no argument passed in
});

// if we want code to run right after the fadeOut COMPLETES, NOT DURING THE FADEOUT
$("button").on("click", function(){
    $("div").fadeOut(1000, function(){
        console.log("only prints after 1000ms of fade") // only once fade 100% done, does this run
        $(this).remove(); // removes the divs completely but only after fade is finished
    });
    // if remove was here it would delete divs before the fadeout is completed
});
```

### Fadein

Set display to none initally then fadein

```js
// fade in after fadedin, same idea as above
$("button").on("click", function(){
    $("div").fadeIn(1000); // 1000ms to fadein, default is 400ms if no argument passed in
});
```

### FadeToggle

```js
// will automaticcaly know if it has to fade something in or out depending on if it is showing
// like using toggle class with classLists in JS
$("button").on("click", function(){
    $("div").fadeToggle(1000);
});
```

### Slidedown

Instead of altering the opacity like fade, it alters the height of the element

- can again give a duration and a callback function to ensure things run after slide is finished

```js
// must be hidden for this to occur

$("button").on("click", function(){
    $("div").slideDown();
});
```

```js
// must be showing the slide up transitions them away to be hidden, display gets set to None afterwards
$("button").on("click", function(){
    $("div").slideUp();
});

// and you can guess what slide toggle does
```
