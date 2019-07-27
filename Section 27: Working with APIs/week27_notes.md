# Section 27: Working with APIs

## Intro to APIs

API: application programming interface.

- Interface for programs/code to talk to one another.

API is a general term that applies to any type of code/interface that is made for other code to communicate with.

- this can be a library, package or module in the broadest sense

Web APIs are a more specialize subset of APIs that have to do with web interfaces.

- API generally refers to web APIs
- generally communicate via HTTP

Examples:

- twitter API: give me all tweets with dogs
- facebook API: give me these profile pictures
- weather API
- reddit API: what is the top current post
- google places API
- yelp API: top 10 res with this postal code

If this then that, for great examples of interacting with APIs and APIs interacting with eachother.

## JSON and XML

How do APIs work?

When we use the internet, we make an HTTP request and we get HTML back.

**API's don't respond with HTML. HTML contains information about the structure of a page. API's respond with data, not strucutre. They use simplier data formats like XML and JSON.**

XML: extended markup language

- syntacticly similar to html but it doesnt describe the structure, rather encodes key value pairs with tags `<person>`

![Screen Shot 2019-07-25 at 2 45 14 PM](https://user-images.githubusercontent.com/42192106/61900099-e17a9c00-aeea-11e9-84fa-3a0cf11fd35b.png)

JSON: javascript object notation

- JSON looks exactly like JS object, but everything is a string

![Screen Shot 2019-07-25 at 2 46 53 PM](https://user-images.githubusercontent.com/42192106/61900158-0bcc5980-aeeb-11e9-9679-032cebed21ea.png)

JSON these days is usually more popular.

- because API calls are usually being done in JS.
- two most common formats for web APIs to respond with. JSON more these days then XML, NOT HTML

## Making API Requests with Node

Going to a website like google.com, makes an HTTP request. You click on anything, that is a request.

- can also make HTTP request through code
- writing code/JS will go and get information through an API with a request and save that data
- we use the package called "requests"
- can also make requests from the command line with "curl"
  - if we write `curl http://www.google.com` we get the html for the google home page
  - but normally we never ask for the html from a webpage, rather the json or xml from an API

We made a request in the browser by refeshing the page, we made a request in the command line by using curl, and now we are going to make a request from a JS file.

We can make a request from node by using the libary/package request.

```js
// calling request on google makes the request but to do anything with that information we get, we need a callback function
// we need a callback bc this request doesnt happen instantly so it needs time
// we pass in 3 things
// 1st is error will hold any potential error (server is down, no internet connection, etc).
// 2nd is response and response has the status code200 status code is a response for a succesful response, if its 200 thats mean things worked
// last thing is body is the stuff that came back, the HTML from google
const request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // usually dont just print body, but rather do something with it
  console.log('body:', body); // Print the HTML for the Google homepage.
  // if website doesnt exist we get an error - ENOTFOUND
  // want to make sure that the request worked
});
```

Const for any variable you dont need to later change instead of var.
Running all the above gives us the html from google.
We can put an API link instead of google and get the response from an API.

## JSON Placeholder API Example

Note: %20 encodes a space in a url

If theres no error we want to console.log the property
What we get back isn't a JS object. Rather it is a string.

- `typeof body = string`
- need to turn it into an object, JS as a built in way to do this, then save to a variable
  - `var parsedData = JSON.parse(body)`
  - this also formats the data like a object rather than a string
- now we can access within the object with: `parsedData["firstLayer"]["secondLayer"]["etc"]`
- we can also use the . sytax like `parsedData.l1.l2.etc`

Can also parse json in the url by entering the keys for the layers.

```js
const request = require('request');
request('https://jsonplaceholder.typicode.com/users/1', function (error, response, body) {
    console.error('error:', error);
    console.log('statusCode:', response && response.statusCode);
    const parsedData = JSON.parse(body);
    console.log(parsedData.name + " lives in " + parsedData.address.city);
    /// another way for concatentation, embedd dynamic variables in string, method is called template literal
    console.log(`${parsedData.name} lives in ${parsedData.address.city}`);
});
```

Const is also ES6 with template litteral. New things not include are promises and arrow function.

## Summary

Download and save all depencies:

- npm install --save express ejs request
- question mark in query string starts query, then we can say `?s=star&tomatoes=true` to change query
  - look at documentation of APIs to figure out how to use
  