# Section 2: Introduction to Front End Development

## Introduction to the Web

When someone visits a webpage, first their computer needs to ask the websites server for a copy of the webpage.

The computer sticks this request in an virtual envelop called a packet.
This packet contains specific information about the request, include the webpage's IP address.
Computer sends packet via underground copper wires until it ends up at a internet hub "a server".
User sends an http request. Travels through networks until it gets to the server where the website resides.
Request has made it to correct server and now it starts going back.
Website is made into smaller packets of data and sent seperately (so it can be faster) back to the user.

Asking for data, server giving data, and browser displaying it.

DNS takes domain name and translates in IP adress (unique identifer of numbers and dots).
Then a request is sent to desired IP adress via and http.
Your request finds the fastest path to the server with the specified IP.
It is not a direct journey, its hopping from server to server until we arrive.

Server then figures out exactly what the user is asking for.
Server pulls info from a database.
Then the server responds with any combination of HTML, CSS and Javascript.
Then our browser comes in turns that into an actual website and not just the code for the website.

In chrome we right click and click view page source to see all the code.
Or command option u, as a shortcut.

## The Front End Holy Trinity

Front End is the stuff that you see and interact with.
This consists of HTML, CSS and JS. These 3 are the front end.
The Back End is everything else. Much more choices in the backend.

Static page and dynamic pages are both HTML, CSS, and JS coming back.
But the dynamic changes based on some server side code.

### HTML
HyperTest Markup Language
Defines the strcutre of a webpage 

- "put an image here"
- "put a form here"

The "nouns" of a webpage

### CSS
Cascading Style Sheets
Defines the style of HTML

- "make all text purple"
- "give the first image a yellow border"

The "adjectives" of a webpage
Need HTML to use CSS
HTML is mandatory, but CSS and JS isnt.
CSS sytles existing HTML.

### JavaScript
Adds logic and interactivity to a page

- "Do some math"
- "Change colour when the user clicks"
- "Load new data from twitter"

The actions or "verbs" of a webpage

HTML and CSS can make a nice looking site
JS makes it interactive.



