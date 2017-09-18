var five = require('johnny-five');
var board = new five.Board;

board.on('ready', function() {
	console.log('Ready');

	var led = new five.Led(13);

	var express = require('express');
	var app = express();

	var state = 'off';

	app.get('/', function(req, res) {
		res.send('<a href="/toggle">Toggle LED</a><br><p>The led is currently ' + state);
	})

	app.get('/toggle', function(req, res) {
		res.redirect('/');
		if (state == 'off') {
			led.on();
			state = 'on';
		} else {
			led.off();
			state = 'off';
		}
	});


	app.listen('1337', () => { console.log('Listening!')});
});