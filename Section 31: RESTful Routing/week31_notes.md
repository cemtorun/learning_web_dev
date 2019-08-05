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

Edit and Update is really the most work.

HTML forms only support get and put requests.

- need method override to fix
- `action="/blogs/<%=blog._id%>?_method=PUT" method="POST">`
- also need to do this : `npm install method-override --save`
- then also have to require and app.use it for it to work
- we want to do this because we want to remain RESTful

Deleting is not an anchor tag but a button.
Where editing in a anchor tag

Santizing inputs allows users not to input scripts into inputs.

- will need while creting and updating data b/c thats when we are taking inputs from the user
- aka removes script tags

<%- allows code between the brackets to be executed. That means a user can potentially enter malicious code and have it run on our website. To prevent this, we use express-sanitizer.

<%= escapes the potential code and only displays it but doesn't execute it, so it's much safer.

Thanks for the help Don, but <%- isn't very bad. It can be dangerous if you don't use express-sanitizer due to script injection, but with express-sanitizer we don't have to worry about that. Without <%- any inserted HTML won't render correctly (e.g., `<strong>`  tags, etc.).

