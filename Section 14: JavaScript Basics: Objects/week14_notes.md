# Section 14: JavaScript Basics: Objects

## Introduction to Objects

Say we want to model a single person that has a name, age and city. Best case to use an object. Data really isnt a list and we dont really want to make 3 variables.

Below is a JS object.

```js
var person = {
    name: "Cem",
    age: 20,
    city: "Toronto"
};
```

- every time is a key value pair
- objects don't have any built in order, they don't have an order like an array.
- doesnt matter what order we declare them, all treated the same
- Cem is stored under the key name
- can access data with:
  - `console.log(person["name"]);` bracket notion
  - `console.log(person.name);` dot notation
  - dot is shorter and quicker to use
  - cannot use dot notation if the property of the object starts with a number `someObject.1blah` not valid, that example would have to be in quotes
  - cant use dot notation if you have a space `someObject.fav color` not valid
    - bad practice to give properties a space anyway
  - if we make variable with the property as a value, we can use the variable name to acccess property with bracket notion and not dot notation
    - `var str = name`
    - `someObject.str` this doesnt get name
    - `someObject[str]` this gets name
- update data with `person["age"] += 1;` or `person.city = "London";`

Different ways to intialize objects:

![Screen Shot 2019-07-15 at 10 35 32 AM](https://user-images.githubusercontent.com/42192106/61224270-4a446600-a6ec-11e9-9d0b-85b91a03ee11.png)

Objects can hold all sort of data, the value of the key can be arrays or even another object.

## Comparing Objects and Arrays

Arrays:

- used to store a list of data
- every item is bound to an index
- use [] to intialize
- retrieve data by knowing the index
- `arr.push("element")` to add
- `arr[1] = "element` to change
- like key value pair but key is a number and must be in order

Object

- no particular order to the elements
- key, value pairs
- **objects are like dictionaries in other languages**
- use {} to intialize
- key without quotes and value that can be anything
- retreive data by knowing propety either with bracket or dot notation
- `object.newProperty = "tall"` or `object["newProperty"] = tall` to add
- `object.propety = "changedValue"` to change

## Nested Objects and Arrays

Can put objects inside arrays or arrays inside objects.

- can have an array of posts, where each post inside the array is an object with property title and author

```js
var posts [
    {
        title = "Hello",
        author = "Cem",
        comments = ["love it", "hate it"]
    },
    {
        title = "Goodbye",
        author = "You",
        comments = ["<3", ":("]
    }
]
```

## Adding Methods to Objects

Can add functions as properties to an object and in this case they are called methods.

Method is a function that is a property inside an object.

```js
var someObject {
    add: function(x,y){
        return x + y
    };
}
```

To call add: `someObject.add(5,10);`, cant just do `someObject.add();`

- console is an object and log is a method

Namespace collison where two things have the same name so the variable/function got updated.

- can use methods to solve this
- where each object can have their own version of the function so you can call obj1.function and obj2.function even though the functions have the same name
- each function (now method) has its own namespace

## The Keyword This

Underscore.js is a popular js library.

- all these methods are of object _, so _.method is how it works
- everything is grouped under an underscore object

The keyword this represents the object.

- this.data represents the data propety of the object you defined
- still tricky, in different situations it means different things
- in one context, inside of a method this refers to an object the method is defined in
