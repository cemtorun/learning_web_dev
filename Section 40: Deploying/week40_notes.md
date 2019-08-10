# Section 40: Deploying

## Intro to Deploying and Heroku

When you deploy that just means running an application on a server.

- deployment and cloud services is a business, i.e. AWS, Heroku, etc
- services that exist to rent you computer power and server space

## Deploying a Simple App

<https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up>

The --save part is really important b/c it tells heroku what needs to be installed when running.

- node_modules doesnt need to go over to heroku b/c npm tells heroku what needs to be installed.

Using heroku

- `heroku login -i` to log into heroku from goorm terminal
- need to download heroku if running without goorm IDE

Need to do git init in order to tell what to send over to heroku

- in this case we are sending everything to heroku
- `heroku create` to create the url
- now need to give start script to represent when we would run `node app.js`
  - must put `"start": "node app.js"` in start script in package.json
- also gotta add .gitignore with node_modules
- `git push heroku master` will push the code that was commited onto heroku
  - this takes all the code runs npm install everytime this runs (will update depencies if there are updates)
  - then will run the start script and bingo bango

If theres any errors, we dont see these at on the actual URL because we wouldn't want to expose these errors to our users, rather we see a log of the error in the command line

- type `heroku logs` to see the logs and find the error

## Deploying YelpCamp

Harder because have a database that we need to think about.

1. Change it to use process.env.PORT for heroku
2. Make sure it runs normally with the non deployed link.
3. git init in right repository
4. Create .gitignore and add node modules to that
5. Add start script to scripts in package.json - `"start": "node app.js"`, add the , for value before
6. git add .
7. git commit -m "inital commit"
8. heroku login -i
9. heroku create, creates the url but won't work right now
10. get the mongodb cluster url from atlast and copy into the mongoose.connect with the correct password
11. push changes to heroku with git add then git commit
12. git push heroku master (pushes code to heroku, npm installs, runs node and deploys)

heroku logs if we getting error

can do `heroku run ls` to see files on the heroku server

- can run code on heroku using heroku run

## Environment Variables
