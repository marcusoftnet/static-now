// serve files from where the node command is run, at port 3000
var staticNow = require("../")
staticNow();

// or as one line
// var staticNowOneLine = require("../")();

// serves from the directory of this file, at port 3000
// var staticHere = require("../")(__dirname);

// serves from the directory of this file, at port 3456
// var staticHereWithPort = require("../")(__dirname, 3456);