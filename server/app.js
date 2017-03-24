var express = require('express');
var app = express();
var port = 5000;
var bodyParser = require('body-parser');
var display = require('./routes/display.js');
//var pets = require('./routes/pets.js');



app.use('/display',display);


app.use(express.static("server/public"));
app.use(bodyParser.urlencoded({extended: true}));

//app.use('/pets', pets);





app.listen(port, function(){
  console.log("Listening on port: ", port);
}
);
