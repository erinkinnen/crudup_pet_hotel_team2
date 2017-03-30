var express = require('express');
var app = express();
var port = 5000;
var bodyParser = require('body-parser');
<<<<<<< HEAD
var owner = require('./routes/owner.js');

app.use(express.static("server/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/addOwner', owner);
=======
var display = require('./routes/display.js');
//var pets = require('./routes/pets.js');



app.use('/display',display);

>>>>>>> f9417001655ddec8500358c3774f7441fe73ea8d

app.use(express.static("server/public"));
app.use(bodyParser.urlencoded({extended: true}));

//app.use('/pets', pets);





app.listen(port, function(){
  console.log("Listening on port: ", port);
});
