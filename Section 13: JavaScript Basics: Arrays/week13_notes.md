# Section 13: JavaScript Basics: Arrays

Variables can store 1 value, but arrays can store sets of values.

## Introduction to Arrays

Want a model a group of friends, where each is a var string that stores their name.

- This doesnt let us group friends together.
- Code is not DRY.
- Array lets us group data in a list.
- Rather than having 4 seperate variables, we can create 1 variable and store 4 different names in that one variable.
- `var friends = ["Dan", "Leon", "Liane", "Marissa"];`
  - square brackets define array syntax
  - comma seperate list
  - first index is 0, lists are indexed
  - can get a value with `friends[0]` = Dan
  - can update values `friends[0] = "Loser"`;
  - can add data `friends[4] = "Adil"` by adding at an index that doesnt exist yet
    - it at index that is not 1 more than last, it creates undefined values between the old last index and the new last index
  - can define empty array `var friends = [];`
  - can store any type of data, and can be mixed types of data
  - can get array length with `friends.length` with last index = length - 1

## Array Methods

Some key built-in methods:

- push
  - dont need to know the index if we want to add to the end of an array
  - automatically adds to the end of the list
  - `colors.push("green");`
  - push returns the length of the new array
- pop
  - removes the last element
  - dont need to know what it is or what index it is at
  - `colors.pop();`
  - pop returns the element that was removed
  - can store the popped value but calling it and storing it as a variable
- shift
  - like pop but instead of remove from the end, it removes from the beginning
  - `colors.shift();`
  - returns that item
- unshift
  - like push but instead of adding to the end, it adds to the beginning
  - unshift = add
  - `colors.unshift("green");`
  - returns the new length
- indexOf
  - returns the index value of the element
  - `friends.indexOf("green");`;
  - returns the first instance of the element
  - returns -1 if element is not present
- slice
  - copy portions of an array
  - first index is the starting index (inclusive), and the ending index (exclusive)
  - `var bestFriends = friends.slice(1, 3);`
  - original array in this way is unaltered
  - with just () we duplicated the array (if no indexes provided)

Chrome browser behaves a little strangely when using alert, prompt, or confirm functions. It doesn't display the HTML on the page until after the popup has been closed. This is problematic since our HTML contains instructions for the user to be able to use the app we're building.

You can avoid this by wrapping your JS code in the following setTimeout function:

```js
window.setTimeout(function() {
  // put all of your JS code here
}, 500);
```

## Array Iteration

Html can be generated through iterating over a array to put the array in the html file

```js
var colors = ["green", "blue", "orange"];

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i])
}
```

JavaScript provides a built in method of iterating through an array: ForEach

- `arr.forEach(someFunction);`
- takes a function as an argument, usually an anonymous function, then that function is called for every single element in the array
- if you dont function an imput the the function (dont put in color) it will just run the loop for however many elements in the array, runs length - 1 number of times
- can also pass in own functions that can do a specific action for however long arr is but make sure to pass w/o parenthesis for the inner function in this case

```js
var colors = ["green", "blue", "orange"];

colors.forEach(function(color) {
  // color inside function is a placeholder
  console.log(color);
});
```

**DAMN FOR EACH IS OP**
Basically the forEach loop will execute the callback function that we define for each element of the array. **If possible (if we define the parameters), it will pass the element directly as the 1st argument, the index number as the 2nd argument, and the whole array as the 3rd argument.**

**BUT**
One of the biggest differences is that you can't short-circuit forEach with a return statement when a certain condition is fulfilled, while you can do that in a for loop. In most other scenarios, you would want to use forEach because it's shorter and it represents a more modern approach to looping.

- if you try to break out of a for each, u break out of the inner function so in the end you can short-circuit because you only exit the first function and then it would run the next lines after that inner function
  - if we used forEach for the inUniform, it would return False, exit the inner function, then continue to the return True b/c it doesnt leave the entire function, so it always return True.
- just generally for normal looping, for each is better but if tryna do reverse or have some weird conditions/ want to break and exit the loop, a for loop is better

### How forEach Works

Remember the difference between passing in a function and executing a function, without () and with () respectively.
