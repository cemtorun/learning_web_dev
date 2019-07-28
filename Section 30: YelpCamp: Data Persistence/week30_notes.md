# Section 30: YelpCamp: Data Persistence

`cp -r v1 v2` in command line to create a copy of v1 named v2, make sure your in same directory as v1

## YelpCamp: Adding Mongoose

HOLY, see the new app.js for everything about including mongoose with node and express.

## Show Page

RESTFUL ROUTES

Import to follow pattern is that it gives strucutre and makes working with APIs easier.

There are 7 types of RESTFUL routes.

name     url        verb    description

-------------------------------------
INDEX    /dogs      GET     Display a list of all dogs
NEW      /dogs/new  GET     Display a form to add a new dog to list
CREATE   /dogs      POST    Add new dog to database
SHOW     /dogs/:id  GET     Show info about 1 dog (id represents which 1 dog)
