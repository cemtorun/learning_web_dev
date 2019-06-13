# Section 3: Introduction to HTML

## HTML Basics

Only the structure and content of a page.

Send the strucutre of the webpage as all text.
Lets us take text and content, allows us to specify what is bold, what is italicized, create hyperlinks, underline, etc.

HTML allows us to do that using HTML tags

`<tagname> Some Content </tagName>`

Introduction to mandatory
Mozilla Developer Network
Good resource for HTML, CSS, and JS

## HTML Boilerplate and Comments

HTML is just text but our browser actually interprets it

Can just now open the file and it works! Can also see page source to see how it was coded

While the tags are right, the code is wrong.

Every HTML page needs this boilerplate.

Onyl have 1 per document.

![Screen Shot 2019-06-10 at 10 15 52 AM](https://user-images.githubusercontent.com/42192106/59201605-c89b6e80-8b68-11e9-8430-81e0b274bd6d.png)

## Basic Tags

h1 and other headings types are block level elements.
This means that each gets the own line. If the tags are on the same line,
they will still be on the different lines.

There are also in line elements that are the opposite of block level elements.

Paragraph tags are also block level elements.

In line elements like the b tag (`<b></b>`), for bold, occur in line and don't create new lines. However theres some semantic html diddly hoo so instead of using a b tag for bold, its better to use a strong tag (`<strong></strong>`), which does the same thing, but its more "descriptive".

Can use i tag (`<i><\i>`)  for italics, but the better way is to use the em tag (`<em<\em>`) (emphasize). Means something more than saying italize.

i tag is more stylling, but em and strong are more structural.

## HTML Lists

We can have ordered vs unordered lists (1,2,3,4 vs bullet points)

- ol tag (`<ol><\ol>`) for ordered list - have to provide list elements (li - for items (`<li><\li>`)) to be created.
- ul tag (`<ul><\ul>`)for unordered list - both require li elements inside
  - can change to roman numerals and stuff like that with css
  - Can next any of the other tags we've seen in this list. like em or strong
- can also next lists within eachother

## Divs and Spans

Two tags: the div tag and the span tag

- not that useful until you get to styling elements

Div tag: `<div><\div>`

- a div is used to group things together
  - used w/o css it wont look different at all, but you can group things in this generic box, it can give a background behind certain groups of text and not others
  
Span tag: `<span><\span>`

- also a generic container like a div tag expect that it is an inline element wheras a div tag is a block level element (it takes up its own line)

Div tags are block level generic containers.

Span tags are inline element generic containers.

## HTML Attributes

### `<tag name="value> <\tag>`

Attibutes are a way to add addtional info the HTML elements.
Take the form on a key value pair: a property then value.

  -class = selected
  -type = text

Alot of attributes (like elements) but few important ones

### Images

We use this using the img tag and the src attribute

- `<img src ="corgi.png">`
- dont need closing tag with this `<img>` is a self closing tag
- the value source can be a URL that is hosted and you insert the link, but it can also be an image saved in the machine
  - if its in the same directory as HTML file, you can just call it "corgi.jpg"
- so if you put this img tag in the body of an HTML file, you will get the picture

### Links

Use the a tag and the href attribute

`<a href="url">Link Text</a>`

Example:
`<a href=www.google.com>Click on me to go to google!</a>`

- needs to be text in order to have something to click on to access URL
- a tag is an in line element

The above actually wont work because it will think we are on the file protocol.
We need to put http to let the url browser know to take us to the http protocol

`<a href=http://www.google.com>Click on me to go to google!</a>`

We can also if we want to remain in the same path just call make href=page2.html.

Two types of URLs

- relative path: relative to where I am add on the url
  - say you have a website, you can use relative path when you have a personal site, and you have an about me, a projects, a resume page which can all just be seperate html files just linked together
- or just take we me to google path
  - useful for if you want to link to facebook or linkedin links
