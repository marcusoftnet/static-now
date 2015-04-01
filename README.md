# static-now
"But I just want so serve up some files... why all of this setup". Have you ever said that to yourself.

Worry no more - static-now is here to help you. With a single line your web server is ready to roll, and you can focus on the static files instead.

```javascript
require("static-now")();
```

This will start a [Koa](http://www.koajs.com) web server on port 3000 and start listening.

You can do it on two lines also for readability
```javascript
var staticnow = require("static-now");
staticnow();
```
# Starting the application
Koa uses generators from ES6 and require 0.11.9 or higher (actually higher... go 0.11.16 for now). You can run multiple versions of node by using [n](http://npmjs.org/package/n) or [nvm](http://npmjs.org/package/nvm).

Start you application with the harmony features enabled:

```bash
node --harmony app.js
```

Or if you're using [io.js](http://iojs.org) leave out the flag:

```bash
node app.js
```

Here's a package.json node ready for you so that you can use ```npm start```:

```javascript
"scripts": {
	"start": "node --harmony app.js"
}
```

# Configuration
There's just a few configuration options that you can use to control the behaviour of static-now.

## Directory

```javascript
var options = { directory : __dirname };
require("static-now")(options);
```
By default the directory that node is started in is used. Meaning if you go ```npm --harmony app.js``` in ```/Volumes/Users/marcus/demo``` the files in that directory will be exposed via the web server.

## Port
```javascript
var options = { portnumber : 3456 };
require("static-now")(options);
```
By default port 3000 is used, meaning that your web server is started at http://localhost:3000.

For hosting in Heroku, or other platform as a service providers, you can use a process parameter to get the correct port. Like so:

```javascript
var options = { portnumber : process.env.PORT };
require("static-now")(options);
```

## Autostart
```javascript
var options = { autostart : false };
var app = require("static-now")(options);
```

You don't have to start the application right away, if you don't have too. The static-now function returns the Koa application so that you can start it yourself, when appropriate.

A good time when this can be handy is for testing, when usually the testing framework is starting the application up. Like this, using [supertest](http://npmjs.org/package/supertest)

```javascript
var supertest = require('supertest');
var staticNow = require('static-now');

describe('Starting app via supertest', function () {
	it('here is how', function (done) {

		var options = { autostart : false };
		var app = staticNow(options);

		// Let supertest start listening
		var request = supertest.agent(app.listen());
		request
			.get('/README.md')
			.expect(200)
			.end(done);
	});
});
```
## Log message
```javascript
var options = { log : true };
var app = require("static-now")(options);
```

static-now spits out some log messages showing you the current configuration etc. You can turn that off or on using the *log* option.

# LICENSE
[The MIT License](LICENSE)
