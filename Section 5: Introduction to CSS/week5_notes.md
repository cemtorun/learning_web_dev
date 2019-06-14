# Introduction to CSS

## CSS Basics

Stands for cascading style sheets.

Adjectives as HTML are the nouns.

- colours, position, border
- how things should look
- NOT inside the HTML, seperate docs.

### The General Rule

```css
selector {
    property: value;
    another_property: value;
}
```

- we select and reference existing HTML elements, like all `<h1>` tags
- inside the curl braces we apply some styles, that follow this key value pair format where we have a property then a colon, a corresponding value, then a semi colon.

### Example: Make all h1's pruple and of font size 56

```css
h1 {
    color: purple;
    font-size: 56px;
}
```

### Example: Give all img tags border colour red and border width 3px

```css
img {
    border-color: red;
    border-width: 3px;
}
```

Can select all but can also just select 1. It will also follow this basic format

## Our First Stylesheet

Before we write some CSS we need to have some HTML that we can style.

- we have to decide where to put the CSS
- before we used to style in the actual HTML
  - `<li style="color: purple;">Leetcode</li>`
  - but this naturally takes alot of work bc we have to copy paste this to all element and then change each one if we want to change them
  - this clutters html and hard to change alot of things
- THIS WAY IS BAD: we want out HTML and our CSS to be self contained, and have their own files
- instead of doing it inline, doing a style tag (inside head but in a unique style tag is better)

```css
<style type="text/css">
    h1 {
        color: purple;
    }

    li {
        color: orange;
    }
</style>
```

Using an li or h1 selector selects all of that respective type and applies the changes to that.

Functionally having the CSS nested inside the HTML works but it isnt good practice

- by just nesting it inside the head tag
- not bad but want to use link tag

- BUT WHAT WE REALLY WANT TO DO IS USE A LINK TAG
  -lets us write our css in a totally seperate file and then connect it with a link tag inside the head of the HTML to connect it all
  - must be in case directory as HTML file

```css
    <link rel="stylesheet" href="filename.css">
```

 We just put this in the head of the html and then have all the style just like below in the css file.

-Make sure to put in head.

```css
h1 {
    color: purple;
}

li {
    color: orange;
}
```

## CSS Colour

Names of colours can get weird and theres only so many that have name.

- So instead we can get a number by writing it's hexadecimal
  - `color: #000000;`
  - first two 0s are for red, then next 2 for green, then last 2 blue
  - in hexadecimal
- can also do it with RGB
  - `color: rgb(255,0,255);`
  - in base 10
- can aslo do it with RGBA
  - `color: rgba(255,0,255,0.5);`
  - last channel ranges from 0 - 1
  - for transparency

## Background and Border

Change the background of a line

```css
h4 {
    background: rgba(33, 255, 190, 1);
}
```

Change the background of the entire webpage

```css
body {
    background: rgba(255, 50, 100, 1)
}
```

Can also make the background an image

- no-repeat to remove repeating nature
- size cover to make it strech the entire page
  - will either want a pic with high enough resolution to fit the page
  - or small/repeatable enough that it can be repeated seamlessly

```css
body {
    background: url(https://cdn.pixabay.com/photo/2016/06/25/22/48/grain-1479676_960_720.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}
```

A border in CSS has 3 different parts:

- width
- colour
- style

We need all 3 of them to be able to see the border.

```css
h1 {
    color: rgba(146, 255, 43, 1);
    border-color:  blue;
    border-width: 5px;
    border-style: solid; 
}
```

or theres a much shorter way...

```css
h1 {
    color: rgba(146, 255, 43, 1);
    border: 5px solid rgba(33, 255, 190, 1);
}
```

## Selectors Basics Todo List

There are things are CSS selectors.

- remeber that selectors are the things before the curly braces

 Basic ones include:

- element
- ID
- class

**Element Selector**: Select all instances of a given element

- The one we've been doing all this time

**ID Selector**: Selects an element with a given ID. Only one per page!

- must alter the HTML to give it an ID and access it that way
  - say for something `id="special"`

Then we write:

```cs
#special {
    color: green;
}

```

That selects the one element that matches that ID name.

- an ID must be unique on the HTML page
- if there are two of the same IDs on the same page that is an error
- can have multiple IDs just not the same ID more than once
- ID doesnt go in the input
- we add a hook called an ID and that does the job

**Class Selector** Selects all elements within a given class

Just like an id, except it is called a class and can be applied to ANY NUMBER of elements on a page.

- class="highlight"
- and then just like id we refer to it in css but instead of a # we use a dot (.)

```cs
.highlight{
    background: yellow;
}
```

Can use text-decoration (`text-decoration: line-through`) to style text is css.
Can add `checked` to start checkboxes checked off when page opens
