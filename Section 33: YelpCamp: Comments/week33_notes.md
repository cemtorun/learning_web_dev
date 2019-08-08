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
