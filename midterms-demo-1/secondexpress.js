//Activity Name: secondexpress.js
//Author Name: Milan, Janus Keith T.
//Section and Code: WD-202 / 2003
var express = require('express');

var app = express();

app.get('/', function (req, res){
  res.send('You have successfully created your second app!','br/','Ryan Joshua Milan WD-202');
})

var server = app.listen(2001, function() {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
})