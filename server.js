var express = require('express');

var app = express();  // inits all the frameworks for handling requests and shit

app.use(express.static('public'));

app.listen(3000, function () {
	console.log('Server is up on port 3000');
});