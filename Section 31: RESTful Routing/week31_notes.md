# Section 31: RESTful Routing

## Intro to REST

REST = Representational state transfer

- it is a mapping between HTTP routes and CRUD (CREATE, READ, UPDATE, DESTROY)
- REST is a pattern for defining routes
- it is just a convention / architechture for mapping HTTP routes to CRUD functionality
- we dont just make "/whatever", with REST there is a pattern to what comes after the "/"

A table of all 7 RESTful routes

![Screen Shot 2019-07-31 at 1 52 50 PM](https://user-images.githubusercontent.com/42192106/62235369-cdc3af80-b39a-11e9-82e2-c072c8887754.png)

Index and show are read routes.
New and create are create routes (one is get other is post req).
Edit and update are update routes.
Update is a PUT request (another HTTP verb).

## Folder Traversal

Also, if you're confused on how to traverse folders using the following syntaxes: ./, ../, and /, then see below:

/ means go back to the root folder, then traverse forward/downward.

./ means begin in the folder we are currently in (current working directory) and traverse forward/downward in the tree.

../ means go up one directory, then begin the traverse.

## Misc

<%-  %>   // THIS RUNS something as code

- can be used to allow user to put in html through input
