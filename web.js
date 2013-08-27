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
	res.render('pages/index.ejs');
});

app.get('/us', function(req, res) {
	res.render('pages/us.ejs');
});

//demo stuff
app.get('/demo/1', function(req, res) {
	res.render('pages/demo1.ejs');
});

app.get('/demo/2', function(req, res) {
    res.render('pages/demo2.ejs');
});
//end demos

app.get('/roadmap', function(req, res) {
	res.render('pages/roadmap.ejs');
});

//blog related stuff
app.get('/blog', function(req, res) {
    res.render('pages/blog.ejs');
});

app.get('/blog/hello', function(req, res) {
    res.render('pages/blog_articles/hello.ejs');
});
//end blog stuff

app.get('/fame', function(req, res) {
	res.send("Our future wall of fame".toString('utf-8'));
});


// Port

var port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log("Listening on " + port);
});