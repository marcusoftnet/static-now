require("./")() // simplest possible

// or you can set options (all default)
/*const staticnow = require("./")
const options = {
	dir  	: process.cwd(),
	port 	: 3000,
	auto 	: true,
	log	    : true
}

staticnow(options) // with options */
console.log('Try to browse http://localhost:3000/package.json for example')