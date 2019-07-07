# Section 8: Bootstrap 4

Alpha, beta and then stable releases.

- alpha and beta can still have major changes
- after stable release they won't be any major changes

## Changes from Bootstrap 3 to 4

Flexbox is a model for laying out your webpage.

- Enabled by default
- Bootstrap 4 is built on flexbox whereas BS 3 wasn't

Main unit that was used in bootstrap 3 was pixels (px), but in bootstrap 4, that unit is now something called rem.

- a relative unit that allows us to scale the size of things based on a global font size.
- global font size is 16px so rems are based on this global size.

5th tier for the grid system

- 5 screen sizes ranging from xs, sm, md, lg, and xl

Dozens of new utlity classes for padding and margin.

Alots of syntax is different

New component called cards that replaces panels, thumbnails and wells.

- cards is an all encompassing component for these 3 old components.

No more glypicons, we have to include our own.

- we did this and used font awesome so no worries!

## Getting Started with Bootstrap 4

Need the css cdn as usual. Also need jQuery and this new one called popper for drop downs and pop ups and lastly the normal js file like in BS 3.

## Bootstrap 4 Colors and Background

Both BS 3 and 4 take advantage of contextual color classes like danger, warning, info, primary, success, etc both with buttons and text.

- bs 4 has some more colors like secondary, light, dark, etc.
- can always change and play around with these colors.
- .text-secondary, .text-info, etc
- .bg-primary, .bg-warning, etc

## Typography

Have utilities that allow us to add border, padding and margin really easily (next lesson).
We have things called display headings

- `class=display-1` to 4
  - usually with h1s

Old way of doing blockquotes was with a blockquote element.

- now we use blockquote tag with class blockquote
  - blockquote class to make font a little larger with more spacing
  - add footer with footer tag and class blockquote-footer and citiation with cite tag
  - title attribute refers to the title of the work
  - mb-0 gives better spacing
  - text-right in blockquote tag to make it right aligned.

Big change that is important has to do with the font units

- rem stands for route em (said like m)
- takes the font size of the route, the route is the top level html element and in BS 4 that is set to 16px
- 1rem is 16px, 2rem is 32px
- everything is linked together

## New Fancy Spacing Utilities

Border

- can give a tag a border class, this can be border-left, border-top, etc.
- can remove borders if by doing border-top-0, border-right-0, etc, if like the original image had a border
- can also change color with border-dark, border-warning, etc
- can change border style with rounded class, or just the top with round-top, rounded-circle, etc

Spacing (margin and padding)

- classes that set padding start with p
- classes that set margin start with m
- where also, t for top, b for bottom, l and r, but also x for left and right, and y for top and bottom or blank for all 4 sides
- we can also have b/w 0 and 5 for the amount of margin and padding which increases as from 0 through 5
  - 0 means 0 padding/margin, 5 means the most
  - pt-0, padding top 0
  - p-0, padding 0
  - pl-5, padding left 5
  - what, where and how much
  - these levels are levels of rem where 5 is 3rem, 4 is 1.5rem ... 0 is 0rem
- margin works in the same way except its m instead of p

## Responsive Breakpoints

5 sizes for browsers

Can set more margin/padding on a larger screen and less on a smaller screen.

- we've been doing: {property}{sides}-{size}
- we can also do: {property}{sides}-{breakpoint}-{size}
  - where breakpoint is one of the 5 sizes
  - works like from this breakpoint and up apply the property, sides and size
  - if you did like only a sm, that would mean at sm, md, lg and xl, make it what is is at sm but at xm make it the default
    - its not only on small, its small and above
    - if only wanted on small, add p-md-0
- theres no setting for xs, we just give it a default and that is for xs
- if you dont specifcy a breakpoint it goes to everything, and default is for xs
- same idea applies with margin
  - can increase margin as the screen size increases

## Bootstrap 4 Navbars

Can control when the navbar collaspes whether thats at md or sm. Couldn't do that in BS 3.

- need to use class navbar-expand-{breakpoint}
- all navbars need this and its really important
- must also give background colour and font color ourselves
  - navbar-dark changes the font color but it doesnt make it dark, it makes it such that the background it goes on is dark

## The New Display Utility

A really important use case is hidding and showing certain things b/w different breakpoints.

- d-{value} for xs
- d-{breakpoint}-{value} for sm, md, lg, and xl
  - where value is one of none, inline, block, etc
    - if we say for anything, `d-xl-none` we can make something disappear when the size is xl size
    - if we only want to see on lg and nothing else, `d-none d-lg-block d-xl-none`
      - from size and up
    - can change block level elements to inline w/ `d-inline` or make a inline block with `d-block`


