//var express = require("express");
import express from "express";
//var path = require("path");
import path from "path";
//var open = require("open");
import open from "open";
import webpack from "webpack";
import config from "../webpack.config.dev";

const compiler = webpack(config);
//var port = 3000;
const port = 3000;
//var app = express();
const app = express();

/* eslint-disable no-console  */

app.use(require("webpack-dev-middleware")(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

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