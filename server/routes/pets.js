var express = require( 'express' );
var router = express.Router();
var pg= require( 'pg' );

var config = {
  database: 'chi', // name of your database
  host: 'localhost', // where is your database?
  port: 5432, // port for the database
  max: 10, // how many connections at one time
  idleTimeoutMillis: 30000 // 30 seconds to try to connect
};

var pool = new pg.Pool(config);

router.get('/', function(req, res){

  pool.connect(function(errorConnectingToDatabase, db, done){
    if(errorConnectingToDatabase) {
      console.log('Error connecting to the database.');
      res.send(500);
    } else {
      // We connected!!!!
      db.query('SELECT * FROM pets ORDER BY "id" DESC;', function(queryError, result){
        done();
        if(queryError) {
          console.log('Error making query.');
          res.send(500);
        } else {
          // console.log(result); // Good for debugging
          res.send(result.rows);
        }
      })
    }
  });
});

router.post('/pet', function(req, res){
  console.log(req.body);
  var name = req.body.name;
  var color = req.body.color;
  var breed = req.body.breed;

    if(errorConnectingToDatabase) {
      console.log('Error connecting to the database.');
      res.send(500);
    } else {
      db.query('INSERT INTO "pets" ("name", "color", "breed")' +
               ' VALUES ($1,$2,$3);',
               [name, color, breed], function(queryError, result){
        done();
        if(queryError) {
          console.log('Error making query.');
          res.send(500);
        } else {
          res.sendStatus(201);
        }
      })
    }
  });
});

module.exports = router;
