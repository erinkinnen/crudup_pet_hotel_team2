var express = require('express');
var app = express();
var port = 5000;
var bodyParser = require('body-parser');
var owner = require('./routes/owner.js');

app.use(express.static("server/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/addOwner', owner);







app.listen(port, function(){
  console.log("Listening on port: ", port);
});
