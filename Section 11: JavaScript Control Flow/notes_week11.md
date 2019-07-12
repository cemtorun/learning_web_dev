# Javacript Basics: Control Flow

## Boolean Logic

Comparison operators:

- >
- >=
- <
- <=
- ==
  - 5 == "5" TRUE
  - == performs type coercion (trys to turn variables into same type)
  - null == undefined is True
- !=
- ===, equal value AND type
  - 5 === "5" FALSE
  - === does not perform type coercion
  - null === undefined is False
  - usually best to use === over ==
- !==

Interesting cases:

- true == "1" is true
  - only for string 1 not any other number
- 0 == false is true
- null == undefined is true
- NaN == NaN is false

## Logical Operators

Logical operators are a way to chain together comparison operators
3 kinds:

- && AND
  - requires both comparisons to be true, not both the same, both must be TRUE
- || OR
  - requires only one of the comparisons to be true, but both true also returns true
- ! NOT
  - doesnt take multiple comparisons, just negates the expression

If the first comparison of an OR operator is true, JS does something called shortcircuiting (shortcircuits the entire expression) meaning it just stops and doesnt look at the second comparision b/c it doesnt need to.

- if first operator of && is false it also js also shortcircuits the expression

Values that arent actually true of false, are still inherently "truthy" or "falsey" when evaluated in boolean context

- !"Hello world" is false, which means string is truthy can also double negate to see thats it truthy
- !!"" is false so, empty string is falsey
- !!" " is true so if theres atleast 1 char its truthy
- !!null is falsey
- !!0 is falsey
- !!NaN is falsey
- !!-1 is truthy
- !!"false" is truthy

Falsey values:

- false, 0, "", null, undefined, Nan
- everything else is truthy

## Conditionals

3 JavaScript conditional keywords are if, else if, and else.

```js
if (age < 18) {
    console.log("Sorry you cant enter");
}

else if (age < 21){ // dont need to write less > 18 bc if its at the else if it must be greater than 18
    console.log("Enter but no drinks");
}

else { // else does not take any expressions
    console.log("Enter and drink!");
}
```

## Introduction to Loops

DRY code: dont repeat youself
WET code: write everything twice

Loops allow us to DRY up our code.

```js
while(someCondition) {
    //run some code
    //Continue to run the code while the condition is true
}
```

```js
var count = 1;

// prints numbers for 1-5
while (count < 6) {
    console.log("count is " + count);
    // increment count by 1
    count ++;
    // count += 2 to increment by 2
}
```

```js
var str = "hello"
var count = 0;

// length of a string is always 1 higher than the greatest index of the string
while (count < str.length){
    console.log(str[count]);
    count ++;
}
```

An infinite loop occurs when the terminating condition never returns false.

- the while(condition) {

str.IndexOf("w") will return the index of the string w is it in is the value of str.

- if you put in a word, it says at what index the word starts at
- if the word or character does not exist, it returns -1

## For Loops

```js
for (init; condition; step) {
    // run some code
}
```

init for intialize.

```js
for (var count = 0; count < 6; count++) {
    console.log(count)
}
```

Variable count only exists inside the for loop, for while loops we have to initialize the variable count before we start the while loop
