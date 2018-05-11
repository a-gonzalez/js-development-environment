// This file is NOT transpiled, so must use CommonJS and ES5

// Register babel to transpile before our tests run
require("babel-register");

// Disable webpack features that Mocha does NOT understand
require.extensions["css"] = function()
{

};

