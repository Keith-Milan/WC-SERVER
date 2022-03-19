//Activity Name: firstexpress.js
//Author Name: Milan, Janus Keith T.
//Section and Code: WD-202 / 2003
const { response } = require("Express");
var express = require("Express");

var app = express();

app.get("/", function(request, response){
  response.send("hello world!");
});

app.listen(3000, function(){
  console.log('Server running at http://localhost:3000');
});