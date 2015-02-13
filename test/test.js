var should = require('should');
var supertest = require('supertest');

var staticNow = require('../');

describe('Setting up a static site with static-now is trivial', function () {
	it('just takes one single line of code', function (done) {
		// and here it is
		// parameters sent to faciltate testing testing
		var app = staticNow(null,null,false);

		// Let's test it out
		var request = supertest.agent(app.listen());
		request
			.get('/README.md')
			.expect(200)
			.end(done);
	});

	describe('of course you can be more advanced and control parameters as well', function () {
		it('like the port and directory to serve files from', function (done) {

			var app = staticNow(__dirname, 3001, false);

			var request = supertest.agent(app.listen());
			request
				.get('/demo.html') // found in this directory
				.expect(200)
				.end(done);
		});

		it('or only the port number', function (done) {
			var app = staticNow(null, 3002, false);

			var request = supertest.agent(app.listen());
			request
				.get('/demo.html') // found in this directory
				.expect(200)
				.end(done);
		});

		it('or only the directory', function (done) {
			var app = staticNow(__dirname, null, false);

			var request = supertest.agent(app.listen());
			request
				.get('/demo.html') // found in this directory
				.expect(200)
				.end(done);
		});

		it('or only the the parameter to control if the app should listen now or not', function (done) {
			var app = staticNow(null, null, false);

			var request = supertest.agent(app.listen());
			request
				.get('/README.md') // found in the root directory
				.expect(200)
				.end(done);
		});

		it('but really... it is that simple', function (done) {
			var simple = true;
			var staticNow = true;
			staticNow.should.be.simple;
			done();
		});
	});
});