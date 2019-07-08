# Section 9: Bootstrap 4 - Flexbox and Layout

## Flexbox Utilities

Flexbox exists outside of Bootstrap. We can do what flexbox does outside of bootstrap (like is css) but it makes it alot simplier to use flexbox within bootstrap.

- to do this we have to give the container containing our content has is of class `d-flex` to make it a flexbox
- by default the main axis of our content is from left to right, the start of the flexbox is on the left, and the end is on the left
- we also have the cross-axis, the start of the cross-axis is on the top and the end of the cross axis is on the bottom

### Main Axis

- `justify-content` allows us to move content along the main axis, the default `justify-content-start`
  - `justify-content` is a class
  - also have `justify-content-end` which moves all elements to the end (right)
  - also have `justify-content-center` which moves all elements into the middle
  - also have `justify-content-between` that spaces them out with the total space between the elements evenly
  - also have `justify-content- around` that spaces the total space between and around the elements evenly

### Cross Axis

- `align-items` allows us to move content along the cross axis, the default is `align-items-strech`
  - `align-items` is also just a class
  - `align-items-start`  puts the elements at the top because the top is start
  - `align-items-end` puts the elements at the bottom because end is the bottom
  - `align-items-center` puts in the center of the cross axis

All of these are responsive as well meaning that we can control them to be centered at md but left on lg and right on xl, so on and so forth if we wanted to.

### Direction

We can change the direction of the main/cross axis using `flex-row-reverse` and `flex-column-reverse` respectively.

If we apply the class `flex-column`, we are working from top to bottom as our main axis.

- `justify-content` works on the main axis whatever that axis is, so in this case it will be the top to bottom
- `align-axis` would now be go left to right

And theres many more properties like this.

If you want something to be a row then once its a certain size to become a column to fit on the browser properly:

- `d-flex flex-column flex-md-row`
- row at md and up, but once below md, then its a column

## Navs and Flexbox

Navs are built with flexbox behind the scenes so can use use flexbox elements within a nav.

- navs are automaticcaly flex display, automatically a flexbox for nav class
  - not that like for divs
- can move elements in the nav with flex
- can make nav vertical just by putting `flex-column`
- point is many things automatically are flexbox enabled
  - wont have to declare `display-flex`

## The Bootstrap 4 Grid

Most commonly used thing in bootstrap.

- pretty similar to BS 3 where we have rows and we can divide each row into a total of 12 pieces/columns
- 5 breakpoints: xl, lg, md, sm, and the default like before xs
- automatically flexbox enabled
- needs to be in a container with a row class
- **must have a row and an a container to use the grid system!!!!!**

## The Grid + Flexbox

Can treat add `justify-content-end` to rows to move content from left to right w/o created empty columns. Can also put it in center, w/o creating 3 col-4 and making two of them empty.

- say you have 9 total units and dont declate 3 of them, you can use those empty 3 and `justify-content-between` to nicely space out the content
- if you have borders that are different sizes due to text length, `align-items-start` (or end or center) will fix that because automatically the value is `align-items-strech`
- can also change singular values/boxes/col with `align-self-start` or anything else to only control that one "box"
  - its a way of overwriting the general alignment/justify

