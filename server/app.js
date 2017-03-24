var express = require('express');
var app = express();
var port = 5000;
var bodyParser = require('body-parser');


app.use(express.static("server/public"));
app.use(bodyParser.urlencoded({extended: true}));








app.listen(port, function(){
  console.log("Listening on port: ", port);
}
);
