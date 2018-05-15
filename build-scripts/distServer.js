//var express = require("express");
import express from "express";
//var path = require("path");
import path from "path";
//var open = require("open");
import open from "open";
import compression from "compression";

//var port = 3000;
const port = 3000;
//var app = express();
const app = express();

/* eslint-disable no-console  */
app.use(compression());
app.use(express.static("dist"));

app.get("/", function(request, response)
{
	response.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.get("/users", (request, response)=>
{
	response.json([
		{
			"id": 1,
			"firstname": "Abril",
			"lastname": "Gonzalez",
			"email": "abril@gonzalez.org"
		},
		{
			"id": 2,
			"firstname": "Karla",
			"lastname": "Gonzalez",
			"email": "karla@gonzalez.org"
		},
		{
			"id": 3,
			"firstname": "Vincent",
			"lastname": "Nguyen",
			"email": "vince@mailer.com"
		}
	]);
});

app.listen(port, function(error)
{
	if (error)
	{
		console.error(error);
	}
	else
	{
		open("http://localhost:" + port);
	}
});