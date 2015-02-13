// serve files from where the node command is run, at port 3000
var staticNow = require("../")
staticNow();

// or as one line
// var staticNowOneLine = require("../")();

// serves from the directory of this file, at port 3000
// var staticHere = require("../")({ directory : __dirname });

// here's a version using all the options
// var staticAllOptionsSet = require("../")({
// 	directory : __dirname ,
// 	portnumber : 3456,
// 	autostart : true,
// 	log : true
// });