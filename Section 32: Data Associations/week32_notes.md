# Section 32: Data Associations

## Introduction to Associations

One:one:

- one of an entity related to one other entity
- one book has one publisher

one:many:

- one entity is related to many of another entity
- one user can have multiple photos

many:many:

- where the one:many association goes both ways
- students and courses: a student can sign up for multiple courses and each course has multiple students

We will see one:many associations the most.

## Embedded Data

Creating vs saving a user:

- So the first step is create a new user, but don't save it into the database just yet.
- The second step is call .save() on that newUser (variable that points to the new instance of User) which will save the new user into the database where it will be persisted.
- However, when we just run a .create() function, it combines new and save into one step, which is great because it saves us time, but it's not always what we need. Some times we need to create the resource (user, post, etc.) do some things to it, then save it int othe database.
- User and post example: user can have many posts but a post only belong to 1 user.

Two models, associated them together and then added posts to users.

## Object References

Another way to associate data is by using object references.

For embedding, each post was stored inside a post array.
For object refererences, have a post array but instead we store the ID of the post and not the actual content.

- we are references the id of a post instead of embedding the entire post

## Module.exports

Helps clean up code and make more modular.

Module.exports is a way to return something from a file.

- it allows us to break up our code and make it cleaner
- but it also allows us to make our code more modular

Need ./ to references current directory in node then we type the path.
