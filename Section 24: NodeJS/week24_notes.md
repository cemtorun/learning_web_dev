# Section 24: NodeJS

## Introduction to Node

Node is way for us to write JS code on the server side.

We are learning this b/c:

- its extremely popular
- its on JS, we dont have to learn a new language

## Using Node

Type node to enter node console (done in goorme IDE or download node locally).

- .exit or control C twice to quit
- can do console.log but cant do alert or prompt because this is server side code
  - theres no interaction with html or css
  - no thing like document (DOM), thats in browser nothing in node
- dont really use the node console, usually just use terminal

Running a file with node

- "node filename"

## Introduction to NPM

NPM = node package manager

Npm is the package manager for javascript.

- in front end js, we use script tags to get access to libraries (comes with node)
  - node version of libaries
- we can do that in the backend b/c we dont have html so we use npm to get these libraries
  - npm refers to them as "packages" but packages and libaries are just the same thing: code that somone else has written that we can add to our own project
- can still packages through the command line
  - "npm install name" no cdn, no install
- we will use packages like express and mongoose, and many more

## Installing NPM

- use `npm install` to install
  - creates new folder node_modules
  - make sure node_modules are all in the same node_modules directory
    - just by installing in the same location as you did the first time
- use `var sometime = require("npm module name")` to include a package in a js file
