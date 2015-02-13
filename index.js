/**
 * Module dependencies.
 */
var koa = require("koa");
var app = koa();
var serve = require("koa-static");


/**
 * Module exports
 */

/**
 * staticNow.
 *
 * @param directory - the directory with the files in it. Current directory is default
 * @param portnumber - the port number for the site. 3000 is default
 * @param autostart - true to start listening directly. true is default
 * @api public
 */
module.exports = function (directory, portnumber, autostart) {
	var dir = directory || __dirname;
	var port = portnumber || 3000;
	var listenNow = autostart || true;

	app.use(serve(dir));

	if(autostart === true){
		app.listen(port);

		console.log("You're static now, buddy!");
		console.log("- files being served from: " + dir);
		console.log("- listening at http://localhost:" + port);
	}

	return app;
};