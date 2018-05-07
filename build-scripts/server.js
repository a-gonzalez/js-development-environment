//var express = require("express");
import express from "express";
//var path = require("path");
import path from "path";
//var open = require("open");
import open from "open";

//var port = 3000;
const port = 3000;
//var app = express();
const app = express();

app.get("/", function(request, response)
{
	response.sendFile(path.join(__dirname, "../src/index.html"));
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