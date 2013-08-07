var express = require('express');
var fs = require('fs');


// Configuration

var app = express.createServer(express.logger());
app.use(express.bodyParser());
app.use(express.methodOverride());
// Serve static files like images
app.use(express.static(__dirname + '/public'));


// Routes

app.get('/', function(request, response) {
  var buffer = fs.readFileSync('index.html');
  response.send(buffer.toString('utf-8'));
});


// Port

var port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log("Listening on " + port);
});