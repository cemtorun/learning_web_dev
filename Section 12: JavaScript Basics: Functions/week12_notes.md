# Section 12: JavaScript Basics: Functions

## Introduction to Functions

The single most important aspect of JavaScript.

Functions let us wrap bits of code into REUSABLE packages. They are one of the bulding blocks of JS.

Must first declare, then call it.

- camel case for function names

```js
function doSomething() {
    console.log("HELLO WORLD");
}
```

Then we call it (as many times as we want):

- doSomething();
- doSomething();
- doSomething();
- doSomething();

If we type just doSomething w/o the parenthesis, we get the value of the function which just gives back the function. We need the () to actually call it.

- *refering to a function vs executing it*

## Arguments

Arguments are how we can write functions that take inputs.
Then we call the function and pass in a value (argument).
Put the name of an argument in the brackets. This variable for argument can be called anything.  We can then use the variable for the argument inside the function.

```js
function square(num){
    console.log(num * num);
}
```

Then we can call with different arguments:

- square(10)
- square(10)
- square(10)

Functions can take multiple arguments:

- `function area(length, width) {`
- order matters

*If you call a function and dont provide a argument where one is expected, the value for the function is then undefined.*

- doesnt break the code but makes it undefined

## The Return Keyword

Often we want a function to send back an output value.

- console.log() prints something in the console but it doesnt return anything
- return keywords lets us CAPTURE the value
- if we want to save that answer we need to return that value
- "4 square is:" + square(4)
  - this DOESNT GIVE 4, it prints 4 to the consol but then the final string is "4 square is: undefined"
  - that is b/c nothing is being returned
  - only the first return is going to run, if it is reached
  - console.log() returns undefined
  - every function returns something and if we dont specify, it returns undefined
  - to capture the value we can save in variable
- *return keyword stops the execution of a function*
- below is called function declaration
- another way to create a function is to store in a variable (weirder) and this method is called function expression

```js
function square(x) {
    return x * x;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
```

Can define js functions in js script, then if we open the html in browser the function is built in to the webpage.

## Scope Code

Scope is the context that code is executed in.

- if we create a variable within a function and assign it a value, we say that inside the function (inside this scope) x = 40.
- outside the function x has no value, if we try to access it we get an error "x is not defined"
- this shows us that we have 2 different scopes, inside the function is one context and outside the function is another (outside = global scope)
- when we create a function it has its own scope and its own set of variables
- in the function's scope, it can access variables in the global scope but global scope cant access variables in the function's scope.
- child can access parent, but parent cant access child
- say we define `x = 100` in the global scope
  - if we say `x = 50` inside function scope, it updates the value of x outside
  - if we say `var x = 50` inside the scope, it doesnt update the value of x outside, only exists wthin function scope this new x, but outside is the old x

```js
function hi() {
    var name = "Rusty"
    console.log(name)
}
//>>> Rusty
function bye() {
    console.log(name)
}
// >>> undefined
// every function has its own scope and they are not shared b/w functions depending on how we create/define them
//name is not accesible in the scope of the bye function
```

## Higher Order Functions

Functions can take other functions are arguments.

- setInterval(sing, 1000)
  - setInterval is built in js function
  - sing is a song function
    - dont need () after sing, bc we arent calling sing, setInterval is executing it, so we just pass the function name but we arent running it, setInterval does that
  - does it every 1000ms

Anonymous functions are when we can pass a function as an argument and define the function inside the argument:

```js
setInterval(function(){
    //write function here inline
    }, 1000)
```
