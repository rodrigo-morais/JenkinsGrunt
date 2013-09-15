var page = require('webpage').create();
setTimeout(function() {
	page.open('http://localhost:8081/stop', function () {
		console.log('Unloaded page!');
		phantom.exit();
	})},
10000);