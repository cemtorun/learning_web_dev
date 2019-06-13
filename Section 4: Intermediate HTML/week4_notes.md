# Intermediate HTML

## HTML Table

The HTML table element `<table>` is used to create tables.

Command / to comment.

Inside of a `<table>` element we write a `<tr>` element which stands for table row. Then inside the `<tr>` element, we have a `<td>` element which stands for table data, and this defines the data we want.

- we use `<tr>` to start a row
- we use `<td>` for each cell in the table

We can add borders with HTML, but its better to do in CSS.

- `<table border="1">`

If we want to make a table header, we can insert another row with `<tr>` and then use another header `<th>`, which stands for table header to make that header.

With HTML5, we want to give things more meaning, so what's good practice is to nest the header information and the body information in a `<thead></thead>` tag and `<tbody><\tbody>` tag.

- everything will look the same but its better for being able to understand and differeniate that the header is not just a normal row.

## Introduction to Forms

Forms are used to get data from the user in any way.

- Forms can be:

  - login form for facebook, when you click login, it submits the form
  - google search engine

The form tag `<form>` will look like a form but wont be functional because we need to have a backend.

- the form tag is a shell/container for containing the entire form
- we put checkboxes, and dropdown menues inside the form tag
- a form will send a request, it sends data from the form, to a server somewhere

Two main parts of a form tag, action and method

- `<form action = "/my-form-submitting-page" method="post">`
- `<!-- All inputs will go here -->`
- `</form>`

First part action will specify where to send the data (to google to sign up page, etc)

The second part is what type of HTTP request we want to send, a get request or a post request.

- we make a get request when we are searching or retrieving data, trying to get information
- we make a post request, when we want to add data to a database/posted to a server
  - google search is a get request
  - signup for facebook is a post request

Input tags `<input>` are what actually go inside the forms. It creates interactive controls. The type determines the type of input.

- `<input type="text>`
- `<input type="date>`
- `<input type="colour>`
- `<input type="file>`
- `<input type="checkbox>`

Can also insert a buttom with button tag `<button>`.

Can also add a placeholder to make the input less ambigious.

- `<input type="text" placeholder="username">`

## The Form Tag

- Has action: where the form sends data too
- Method: what HTTP method (get or post)

Form is a block level element.

If you have form without the action and method it will just referesh the page.

- by default if you dont specifcy an action, the request will automatically go to the exact same page
- if you dont specificy a method, its going to be a get request

If you enter a site an it does not exist you get an error, if it does exist it redirects you to that site.

Will send data to backend.

If we set the name of the input we can then see them as added as a query string to the url. Question mark followed by key value pairs seperated by ampersand.

- `<input type="text" name="username placeholder="username">`
- whole point is to give names to data so that we can retrieve them later
- data taken out of the form and sent to some other place
- forms will extract data, send it somewhere, process then recieve it on the backend

## Labels

Allows us to add captions to individual elements in our form. Labels are import for making site accessible. Software looks for label tags to know which each part coresponds to what.

Result looks the same but labels allow the software to understand what everything means.

## Form Validations

The ability to enforce rules and strucutre onto different parts of a form.

- cannot leave email blank
- password must be greater than 10 characters
- email must follow correct email syntax.

We can just go to the username input and add the `required` attribute.

- don't have to say `required=true`, can just say `required`
  - the fact that it is there means it's required.
- may not work in every single browser - it works in chrome and hence the page does not referesh
- if you leave both username and password blank, it will yell at you for username only first, you fill in username and it yells at you for password, then you enter both and submit

That was called a **presence** validation.

- something is required, it needs to be there.

Can also check if an email looks like an email and has the correct format.

If you just change the type of the input to email, and leave the `required` attribute. First it will give an error if nothing is entered. It can also give an error if an invalid email is entered.

## Dropdown And Radio Buttons

1. Radio button is just another type on input similar to checkbox.
2. Select tag is how to get drop down menues
3. Text area allows us to make text inputs that are multipel lines long.

### Radio Buttons

- radio and checkbox are little different
- checkbox can toggle on and off, allows user to select and unselect.
  - selecting what skills you have
- radio button used when the user has one choice
  - gender
  - we need to make sure to tell HTML that certain radio buttons are for the same choice and that only one should be selected at a time
    - this is by given by the name attritute, it given an input that HTML that can refer to it by and it its also the way it is sent and store in HTTP request  
    - so we give two inputs the same name in order to connect them

Radio buttons and checkboxes are made by setting the type of input to radio or checkbox: `<input type=radio>`
If a button is the last thing in the form, it will submit the form.

So like with any other query string we should see something when we click submit if theres a name defined for an input.

- we see "pet=on"
- so we need to say what the value of this decision is
- so we need to add a value attribute

### Select Tags

Select tag `<select></select>` lets us create drop down menues.

- use the option tag `<option></option>` for each of the options that a user can select from

In we want our answer to appear in the query string, then we need to put name="xx" in the select tag.

- `<select name="colour">`
- this makes it just select whatever the text is inside the option and use that to construct the query string
- but we may not always want the value that is sent along in the request to be identical to what is displayed to the user in the dropdown
  - say the user sees emoticons but we want the meaning of those emoticons sent
  - we use the value attribute for this

### Text Area

Nice way to create inputs that are more than 1 line.

- input type can be text which is 1 line
- what if we wanted a bio or a resume, wont work well with 1 line.
- its another tag like select, its not an input like text
- first you create a textarea tag `<textarea></textarea>`
- then we specify how big the text area is using the rows `rows` and columns `cols` attributes
- and just like the other elements, if we wanted to send this data in a request, we would need to give it a name
