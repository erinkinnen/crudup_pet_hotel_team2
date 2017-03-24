var express = require('express');
var app = express();
var port = 5000;
var bodyParser = require('body-parser');

var pets = [];


app.use(express.static("server/public"));
app.use(bodyParser.urlencoded({extended: true}));



app.post( '/newPet', function(req, res){
  console.log('newPet base hit');
  var newPet = req.body;
  pets.push(newPet);
  res.sendStatus(200);
});




app.listen(port, function(){
  console.log("Listening on port: ", port);
}
);
