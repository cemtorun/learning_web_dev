# Section 33: YelpCamp: Comments

To duplicate a folder from terminal:

- cp -r v1 v2/
- do in same parent folder of v1 and v2

## Recfactoring app.js

Really import to make sure you are using module.exports to return the model in the new model javascript files or else this won't work.

## Seeding the Database

Use a seeds file so we can test if comments are working without having to create all the routes, add the comments etc - quicker way just to see if comments are working.

If we delete the campgrounds in the database, and the add new campgrounds, there's no guareentee of the order in which those will happen.

- the way to guarentee the order is to put the add new campgrounds inside the callback for the delete all campgrounds (in the else of the delete campgrounds)
- this way, only once all the campgrounds are deleted, then the new campgrounds are added

## Creating Comments

We can group things together for name when extracting something from a form. What this does is it makes it easier to extract.

- `name=comment[text]`
- `name=comment[author]`

This will give us a pre-made object where we dont have to create new variables.

- we just do: `req.body.comment` and this gives us an object of the data we wanted
- to access then we just do `req.body.comment.text` and `req.body.comment.author`
- and if we can just pass in that object if we are making an object, dont need to extract the variables

## Styling Comments

Skipped the styling part: see on github.

<https://github.com/nax3t/webdevbootcamp/tree/master/YelpCamp>

Where v5 is the styled version.
