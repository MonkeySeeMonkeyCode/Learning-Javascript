var express = require('express');
var app = express();

var Animal = require('./Animal.js');
var Toy = require('./Toy.js');


app.use('/', (req, res) => {
	res.json({ msg : 'It works!' });
    });

//This API finds and returns the Toy in the “toys” collection with the ID that matches the id> parameter. 
//It should return the entire Toy document/object, including all properties that are stored in the database.
//If the id> parameter is unspecified, or if there is no Toy that has a matching ID, this API should return an empty object.

app.use('/findToy', (req, res) => {
    var query = {};
    if (RegExp.query.id) {
        query.title = {$regex : req.query.title};
    }
    if (Object.keys(query).length != 0) {
        Toy.find(query, (err, books) => {
            if (!err)
            res.json(toy);
            else {
                console.log(err)
                res.json({});
            }
        });
    }
    else res.json({});
    });

app.use('/findAnimals', (req, res) => {
   if (!req) {
        res.json({});   
   }
    });
    
app.use('/calculatePrice', (req, res) => {
   res.json({ msg : 'It works!' });
    });

app.listen(3000, () => {
	console.log('Listening on port 3000');
    });



// Please do not delete the following line; we need it for testing!
module.exports = app;