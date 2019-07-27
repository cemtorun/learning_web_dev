var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

app.get("/", function(req, res){
	// render a form when you go to the homepage to search
	res.render("search");
});

app.get("/results", function(req, res){
	var query = req.query.search;
	var url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb";
	request(url, function (error, response, body) {
  	console.error('error:', error);
  	console.log('statusCode:', response && response.statusCode); 
	const parsedData = JSON.parse(body);
	res.render("results", {parsedData: parsedData}); 
	// pass the parsedData into the results template, where we see parsedData in the results.ejs template
	//res.send(parsedData.Search[0]);
	});
});

app.listen(3000, function(){
	console.log("movie app is listening to ya!");
});