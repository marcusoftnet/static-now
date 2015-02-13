/**
 * Module dependencies.
 */
var koa = require("koa");
var app = koa();
var serve = require("koa-static");


/**
 * Module exports
 *


/**
 * staticNow.
 *
 * @param options - options for controlling the execution;
 * - directory - the directory with the files in it. Current directory is default
 * - portnumber - the port number for the site. 3000 is default
 * - autostart - true to start listening directly. true is default
 * @api public
 */
module.exports = function (options) {
	var opts = getOptions(options);

	// Set up directory for static files
	app.use(serve(opts.dir));

	if(opts.auto === true){

		// Start listening
		app.listen(opts.port);

		if(opts.log === true){
			console.log("You're static now, buddy!");
			console.log("- Settings:");
			console.log(opts);
			console.log("Your static site can be found at http://localhost:" + opts.port)
		}
	}

	return app;
};

var defaultOptions =  {
	dir  	: process.cwd(),
	port 	: 3000,
	auto 	: true,
	log	: true
};

function getOptions(options){
	var opts = defaultOptions;
	if(options != undefined){
		opts.dir = options.directory != undefined ? options.directory : opts.dir;
		opts.port = options.portnumber != undefined ? options.portnumber : opts.port;
		opts.auto = options.autostart != undefined ? options.autostart : opts.auto;
		opts.log = options.log != undefined ? options.log : opts.log;
	}

	return opts;
};