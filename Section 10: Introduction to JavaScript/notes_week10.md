# Section 10: Introduction to Javascript

## The JavaScript Console

Command Option C to open the JavaScript console in Chrome.

- Console used to play around and test things out.
- can run animations on the current page in browser you are on, for example grow image on screen, that can be done with JavaScript console.
- `console.log("")` to print message in console
- `alert("")` to give a popup with message

## Primitives

In JS there are 5 primitive data types. 5 low level basic types of data:

1. Numbers
These can be either whole number, decimal, negative.
JS doesnt differenciate b/w numbers, no float or int, just numbers.

2. Strings
Text that are enclosed by quotes.
Numbers inside quotes are strings.

3. Boolean
Either true or false. Just the word true or false.

4. Null
Only one null, these are categories, only one value.

5. Undefined
Only one undefined, these are categories, only one value.

Numbers

- We can do math in the console on any webpage.
- if we enter a number we get that number back spit out at us in the console
- can do math (aka just write `4 + 1`, or like `5 % 2` (mod))

Strings

- strings can be in single or double quotes, start with sing and end sing, and same for double, must match
- we can concatenate strings with a + between the two strings
  - `"Hello" + " world!"`
- can use a backslash to escape characters, aka we want a double quote in the string
  - `"She said \"hi cem!\" "`
  - `"\\"` to see a backslash
- strings have a length property, spaces are included
  - `"hello world".length` = 11
- can also index strings with [], JAVASCRIPT IS A 0 INDEX LANGUAGE
  - `"hello"[0]` = h
  - last index is always 1 less than the length, bc length starts at 1

## Variables

Variables are simple containers that store values:

- `var yourVariableName = yourValue;`
- `var name = "Rusty";`
- `var secretNumber = 43;`
- `var isAdorable = true;`

Can recall and update variables names:

- `"hello there" + name`
- 11 + secretNumber
- can also update variable names anytime, dont need var keyword anymore
  - `var name = "Rusty"`
  - `name = "Cem"`
  - can type just name in console to get the value
  - can update a number to a string/bool, it doesnt matter, can just change the type, js doesnt care
    - javascript has dynamic typing so it can change from 1 type to another without a problem
    - convention for js variables is camelcase: myVariableName
      - snake_case uses underscores
      - kebab-case uses a dash

## Null and Undefined

Variables that declared but not initialized are considered undefined.

- `var name;`
- `var age;`

Can also declare a variable and initialize them to null making them of type null. Null = explicitly nothing

- `var currentPlayer = "cem"`
- `currentPlayer = null`

## Useful Built-In Methods

To comment `"//"`
To clear console type `clear()`

- clear is also a method

Alert, prompt and console.log are 3 useful javascript built-in methods.

- methods are like variables but instead of storing a variable, it stores other JS code that can be executed over and over
- could be like 100 lines of JS behind the screen
- `alert("message")`
  - gives a popup on the screen from the browser
  - could also be a number
  - could also do math in there along with variables
- `console.log("message")`
  - prints message in console for our own purposes
- `prompt("question")`
  - allows us to ask the user a question, gives a popup like alert but asks a question
  - we need to store the value to actually save it:
  - `var userName = prompt("What is your name?")`

To comment `"//"`
To clear console type `clear()`

- clear is also a method
