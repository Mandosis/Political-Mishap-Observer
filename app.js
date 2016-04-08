// Dependencies
var express = require('express');

// Global Variables
var republicans = ['British Dude', 'Monkey', 'Banjo Master', 'Turkey Guy'];
var democrats = ['Bananna Sandwhich Curator (aka Joel)', 'Money Bags', 'Lives on Couch', 'Rocket Man'];

// Middleware
var app = express();

app.use(express.static('public'));

app.get('/republicans', function(req, res) {
  res.send(republicans);
});

app.get('/democrats', function(req, res) {
  res.send(democrats);
});

app.get('/winner', function(req, res) {
  var winner = function() {
    var candidates = republicans.concat(democrats);
    var random = Math.floor(Math.random() * (1 + candidates.length - 1) + 1) - 1;

    return candidates[random];
  };
  res.send(winner());
});

var server = app.listen(process.env.PORT || 3000, function() {
  var port = server.address().port;
  console.log('Server listening on port', port);
})
