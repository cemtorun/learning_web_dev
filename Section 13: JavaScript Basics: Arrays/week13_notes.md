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

## Array Iteration
