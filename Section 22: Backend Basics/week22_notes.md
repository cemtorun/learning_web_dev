# Section 22: Backend Basics

## Introduction to Backend

When we go to a url, a few things happen behind the scenes.

- first your query is submitted to your internet service provider (ISP)
  - within your ISP, the DNS takes the domain name and turns it into an IP address
    - DNS: The Domain Name Systems (DNS) is the phonebook of the Internet. Humans access information online through domain names, like nytimes.com or espn.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources
- next, once we have that IP address a new HTTP request is sent to the desired IP address
  - your request find the faster possible path to the server with the specified IP address
  - this is not a direct journey, it requires alot fo hopping from server to server until we arrive
- then the server responds
  - the requested server figures out what exactly your asking for (/home or /about or /pricing, etc)
  - the server builds us the right content, often pulling information from a database
  - the server then responds with any combination of HTML, CSS and JS
  - sent back to user's computer as an HTTP response
- now it gets to the user's browser whose job is to render the page from HTML, CSS and JS to an actual webpage

### Static vs Dynamic Webpages

Everything we've written so far has been a static webpage.

- same HTML, CSS and JS everytime

Dynamic webpages are sites that are complied on the server side where the server is constructing a webpage before it is sent back as a response.

- can have different HTML, CSS and JS sent every single time
- this happens on a site like reddit for example
- not same HTML, CSS and JS sent everytime

Stack refers to all the technologies a particular web application uses.

- HTML, CSS and JS are almost always part of a stack
- on the backend there usually alot more variance
- backend can be written in Ruby or Python, Java, Javascript, etc along with a ton of databases (SQL, mySQL, mongo, etc)
- stack refers the particular choice the developers made and what exact technologies they use
- what stack are you using on this project / at work?

![Screen Shot 2019-07-20 at 1 51 14 PM](https://user-images.githubusercontent.com/42192106/61582199-95e47e80-aaf5-11e9-952a-2cb7c53b7d3d.png)

![Screen Shot 2019-07-20 at 2 01 58 PM](https://user-images.githubusercontent.com/42192106/61582285-f7591d00-aaf6-11e9-9df4-53a1630ebf66.png)

Server side is backend.
Client side is frontend.
Together you get fullstack.

![Screen Shot 2019-07-20 at 2 06 42 PM](https://user-images.githubusercontent.com/42192106/61582338-a0a01300-aaf7-11e9-84e3-11e26440a3dc.png)

![Screen Shot 2019-07-20 at 2 08 39 PM](https://user-images.githubusercontent.com/42192106/61582360-e5c44500-aaf7-11e9-98a1-e447155951b6.png)

## HTTP in Depth

Can make HTTP request in app, and in command line, not just in browser.

HTTP verbs: refer to different types of requests we can make.

- tell the server what kind of request we are making
  - get: retreiving information
  - post: posting new inforamtion, sending information
  - put/patch: update information
  - delete: delete something

When you make a request, are there 3 information parts of every response.

1. the body of the response, what is being sent to us.
2. we get the headers, the meta data about the response (type, date, time, status)
3. status code, part of the protocol of http, standarized way of saying the request is good.

Query string starts after ? term.

- q = cat, reddit takes in a value for key q in search
- can still send data with get request when we sending a search query, or want to sort data

On the internet, a query string is the part of a uniform resource locator (URL) which assigns values to specified parameters. The query string commonly includes fields added to a base URL by a Web browser or other client application, for example as part of an HTML form.

## Backend Workflow

Have a server file written in JS. When this file runs, it will start a server.

- we have some code for server setup
- code for database setup
- code for routes
- "/" refers to route path, which is what the home page should be
  - different routes lead to different responses from server
  - the code listens for different routes "/" or "/dogs" and sends different things depending on what the get request is
  - then it renders that information from a file called "home" or "dogs", etc
  - get all the dogs from database and and then render that file if theres a database
- also allows us to send post requests where we define parameter key and value
- we can create a form to collection this information for a post require.
  - we use the tag form with attributes action="route we send to" and method="POST" then we add the inputs within the form
