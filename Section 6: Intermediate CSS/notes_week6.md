# Section 6: Intermediate CSS

## Text and Fonts

Each computer has basic fonts that it has

- almost all computers have arial

### Font Family

```css
p {
    font-family: "Arial";
}

h1 {
    font-family: "Georgia";
}
```

### Font Size

```css
h1 {
    font-size: 200px; /* can also use em (Relative font size) rather than px, ems are dynamic */
}

span {
    font-size: 2.0em: /* font size will be 2x larger than its enclosing/parent element (p), dynamic */
                      /*dont have to change if parent gets changed, its automatic (relative)*/
                      /* can just make the body a font size and use only em fonts if thats what you want */
}
```

`<span></span>` is just a way to group text together.

## More Text and Fonts

### Font Weight

How thick the lines in the font is

```css
p {
    font-weight: bold; /* some fonts let you do a numeric value between 100 - 800 by 100s (100, 700, etc) */
}
```

### Line Height

Refers to line spacing between lines.

```css
p {
    line-height: 2; /* multiples line height by the factor that is there, 2x larger, 1.5x larger, etc. */
}
```

### Text Align

Controls how a text is aligned (left, right center)

```css
h1 {
    text-align: right;
}
```

### Text Decoration

Allows us to give text and underline, strike through, overline, etc

```css

p {
    text-decoration: underline;
}
```

## Using Google Fonts

Google has a bunch of fonts for free that can be included in own application.

1. Go to google fonts
2. Select the fonts by clicking the red + that you want on your website.
3. Select the customize tab and select the ones you need
4. Click the embed tag and copy the link below the standard option.
5. Paste this link tag into the head tag of your project, before the link to your custom CSS

- including multiple weights increases the page load so just choose what you'll actually use
- every single font and weight is another request that needs to be made, more data that needs to be loaded

`<link href="https://fonts.googleapis.com/css?family=Lora:400,700|Mali&display=swap" rel="stylesheet">`

So to apply this:

```css
h1 {
    font-family: Lora;
}
```

Then can change weight by changing the weight.

Don't really need more than google fonts.

## Introduction to the Box Model

Basic idea that each element has a rectangular box around it. These boxes are usual because we can style properites of element, aka box.

Are all dynamic with window size

- padding: between content and the border
- margin: between border and things outside
- width: the rectangle wont go across the entire screen if you decrease the width
- height: same idea

Can also select on which sides we want to apply these changes.

```css
p {
    border: 2px solid blue;
    border-top: 10px;
    width: 200px; /* can also do 50%, 50% of parent element, paragraph inside body.*/
    height: 300px;
    padding: 10px;
    padding-left: 40px;
    margin: 100px;
    margin-top: 10px;
    margin: 20px 40px 50px 60px; /* apply width to all in 1 line */
    margin: 0 auto 0 auto; /* centers the text, top right bottom left. */
    margin: 0 auto; /* same thing as above */
    margin: 20px 50px; /* 20 on top and right, 50 on bottom and left */
}
```
