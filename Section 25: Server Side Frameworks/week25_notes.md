# Section 25: Server Side Frameworks

## Introduction to Express

We've used a couple of libaries like jQuery and Bootstrap (cat-me, knock-knock too).

Frameworks are similar; they are code that someone else wrote (usually alot of people and alot more code) that we can use in our application. But the way that we use them is different.

The defining difference is "inversion of control".

- library is something you are in control of, if you want to use one or two or ten methods you can do that
- but with a framework, you give up control, decisions are already made for you and that you have to abide by
  - gives you a basic groundwork, so you can focus on what makes your application unique and not all the homogenous boring stuff to set it up

Express is a web development framework.

- other web development frameworks could be flask, django, rails, etc

Why Express?

- by far the most popular node web development framework
- two terms for frameworks: heavy-weight and light-weight
  - these two refer to how much of the work does the framwork do for you vs how much you have to do yourself
  - heavy-weight you write less code, light-weight you are doing more of the work
  - express is a very light-weight framework, it doesnt hide things from you, you know exactly what you are doing
  - unlike rails, you can make apps fast but alot of the function is abstracted away so people dont always understand what rails is doing
- express is a web framework for node.js
  - unopionated: lets you do what you wants where rails in very opinioniated, express has more freedom

## Our First Express App

Routes are the code that is reponisble for listening and recieveing request and deciding what to send back.

- listeing for get on home page (/)
- listen for post of /create
- etc

## The Package.json

## Route Params
