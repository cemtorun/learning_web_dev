# Section 29: Databases

## What is a Database

A collection of information/data and have an interface for interacting with that data.

- adding
- removing
- modifying
- we can write code to interact with it

SQL (relational) and noSQL (nonrelational) database

- SQL databases are tabular and flat
  - have to define a table ahead of time
  - not as flexible when adding attributes
- noSQL
  - dont have to define patterns ahead of time
  - no tables
  - things can be nested so its not a flat database
  - basically javascript objects
  - flexible when adding new attributes
  - all users in the database dont have to have the same attributes

We are using noSQL db.

Each have their own benefits, if we want flexibility then noSQL.

## MongoDB

Non relation/noSQL database.

- looks like JS objects in the database, its very flexible
- most popular database with node backend
- part of MEAN stack (mongo, express angular and node), we doing MEN stack

Installing MongoDB

- make data director to mongo to store all its information.
- then we tell mongo that this data directory is where it should store data, command with echo
- chmod command changes permission and setting to make thing run smoother

Then we start the mongo demon with ./mongod. Run in the same directory that data was installed.

Then by typing mongo and enter. This opens up the mongo shell and console.

GOTTA RUN ./mongod in same directory as data folder.

## Mongo Shell Basics

Key commands

- mongod
  - starts our mongo demon which runs in the background
- mongo (open in new terminal window after running mongod)
  - opens up the mongo shell, like the js console, we use to debug and to test things out
- help
  - gives information on basic features/commands in mongo
- show db
  - show db names, two default are admin and local
  - make a seperate db for every app we make
- use
  - use nameOfDb, if it exists then we use it, if it doesnt then mongo makes it
  - wont see a new db until we add something to it
  - and we add things to a db by creating a new collection
  - use demo
- insert
  - db.dogs.insert(dataToInsert)
  - db refers to the database we are currently on, we do that by using use command, dogs is the collection name that doesnt exist will but will after we run command, and insert is the command that will insert the dogs collection into the db that we are in which is demo
  - db.dogs.insert({name: "Rusty", breed: "Mutt"})
  - can run show collections to see all collections in the db and see that now there is a dog collection
- find (also called reading)
  - view all dogs in collections
  - db.dogs.find(), this will return all the dogs if we dont pass in anything
  - has an id that is automatically assigned to all elements
  - can do db.dogs.find({name: "Rusty"}) to only return dogs with name of Rusty
- update
  - db.dogs.update({name: "Rusty"}, {breed: "Pomsky"}), takes what to select by then second is value to change
  - however the above will just delete the name attribute, if we want to keep we have use $set.
  - db.dogs.update({name: "Lady"}, {$set: {breed: "Doodle", isCute: true}})
    - this preserves attirbutes that werent reassigned to just stay how they were, the first one will only include attributes in the reassignment
- remove
  - db.dogs.remove({breed: "Pomsky"})
  - will remove all instances where the condition is met

CRUD: create, read, update, destroy

## Introduction to Mongoose

The mongo console is nice but we will write most of our code to interact with db is inside of our express  code within JS.

Mongoose is an ODM, object data mapper. It is a way for us to write JS inside our JS files where that JS will interact with our db. JS layer on top of mongodb.

Mongoose is mongodb object modeling for node.js

- it is package we download that lets us interact with mongodb inside of our JS files.
- possible to do it without mongoose, but its like the way that jQuery makes it easier to interact with DOM, this makes it easier to interact with db.
