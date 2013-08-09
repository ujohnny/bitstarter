var express = require('express');
var fs = require('fs');


// Configuration

var app = express.createServer(express.logger());
app.use(express.bodyParser());
app.use(express.methodOverride());
// Render html pages
app.set('view options', { layout:false });
app.set('view engine', 'ejs');
app.set('views', __dirname + '/');
// Serve static files like images
app.use(express.static(__dirname + '/public'));
// Favicon
app.use(express.favicon(__dirname + '/public/icons/favicon.ico'));


// Routes

app.get('/', function(req, res) {
	res.render('index.ejs');
});

app.get('/us', function(req, res) {
	var buffer = fs.readFileSync('us.html');
	res.send(buffer.toString('utf-8'));
});

app.get('/demo/1', function(req, res) {
	res.send("Demo will come soon!".toString('utf-8'));
});

app.get('/schedule', function(req, res) {
	res.send("Project schedule will come soon!".toString('utf-8'));
});

app.get('/blog', function(req, res) {
	res.send("A cool project blog will come soon!".toString('utf-8'));
});

app.get('/fame', function(req, res) {
	res.send("Our future wall of fame".toString('utf-8'));
});


// Port

var port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log("Listening on " + port);
});