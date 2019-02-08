var express = require('express');
var app = express();

var Animal = require('./Animal.js');
var Toy = require('./Toy.js');

app.use('/calculatePrice', (req,res) => {
console.log(req.query);
    var error;
    let map = new Map();
    if(req.query.id.length!=req.query.qty.length){
       error = 1;
       }
    for (i=0;i<req.query.id.length;i++) {
        if(map.has(req.query.id[i])){
            map.set(req.query.id[i],Number(map.get(req.query.id[i]))+Number(req.query.qty[i]));
        }
        else {
        map.set(req.query.id[i],req.query.qty[i]);
        }
    }
    let idArray = [];
    for (let keys of map.keys()) {
        idArray.push(keys);
    }
    console.log(idArray);
    let query = {};
    query.id = {$in: idArray};
    console.log(query);
    Toy.find(query, (err,toy) => {
        if(err){
            res.json({});
        }
        else {
        let totalPrice = 0;
        let items = []; //holds an object with items qty and subtotal
        for (var i = 0; i<toy.length; i++){
            let subtotal = 0;
            let qty = map.get(toy[i].id);
            if(qty<1||isNaN(qty)){1}
            else {
            subtotal = toy[i].price*qty
            items[i] = {'item':toy[i].id,'qty':qty,'subtotal':subtotal};
            totalPrice = totalPrice+subtotal;
            console.log(items);
            }
        }
        let returnObject = {};
        returnObject.totalPrice = totalPrice;
        returnObject.items = items;
        if (isNaN(totalPrice)||error){
            res.json({});
            }
        else {
        res.json(returnObject);
            }
    }})
});

app.use('/findToy', (req,res) => {
    var query = {};
    if(req.query.id) {
        query.id = req.query.id;
        Toy.find(query, (err,toy) => {
            if(!err){
            let toyObject = {};
            for (var i = 0; i<toy.length; i++) {
                    if (toy[i].id) {
                        toyObject.id = toy[i].id;
                    }
                    if (toy[i].name) {
                        toyObject.name = toy[i].name;
                    }
                    if (toy[i].price) {
                        toyObject.price = toy[i].price;
                    }
                }
        res.json(toyObject);
            }
            else res.json();
    });
    }
    else res.json();
})

app.use('/findAnimals', (req, res) => {
    var orTerms = [];
    var andTerms = [];
    if (req.query.species) {
    andTerms.push({species : req.query.species});
    }
    if (req.query.gender) {
    andTerms.push({gender : req.query.gender});
    }
    if (req.query.trait) {
    orTerms.push({traits : req.query.trait});
    }
    if (orTerms.length>0&&andTerms.length>0) {
        var query = { $and : andTerms , $or : orTerms};
    }
    else if (orTerms.length>0) {
        var query = { $or : orTerms };
    }
    else if (andTerms.length>0) {
        var query = { $and : andTerms };
    }
    else {
        var query = {};
    }
    console.log(query);
    if (Object.keys(query).length == 0 ) {
        res.json();
    }
    else {
        Animal.find( query, '-traits', (err, animals) => {
            let animalsArray = [];
            for (var i = 0; i<animals.length; i++) {
                let animalsObject = {};
                    if (animals[i].name) {
                        animalsObject.name = animals[i].name;
                    }
                    if (animals[i].species) {
                        animalsObject.species = animals[i].species;
                    }
                    if (animals[i].breed) {
                        animalsObject.breed = animals[i].breed;
                    }
                    if (animals[i].gender) {
                        animalsObject.gender = animals[i].gender;
                    }
                    if (animals[i].age) {
                        animalsObject.age = animals[i].age;
                    }
                animalsArray.push(animalsObject);
                }
            res.json(animalsArray)
        });
    };
    });

app.use('/animalsYoungerThan', (req, res) => {
    if (isNaN(req.query.age)){
        console.log("not a number")
        res.json();
    }
    else{
        var query = {};
        query.age = {$lt : req.query.age};
        console.log(query)
        Animal.find( query, (err,animal) =>{
            console.log(animal)
            let returnArray = [];
            let nameArray = [];
            let counter = 0;
            let returnObject = {};
            for (var i = 0; i<animal.length; i++) {
                nameArray.push(animal[i].name);                
                counter = 1+i;
            }
            returnObject.count = nameArray.length;
            if (nameArray.length>0){
            returnObject.names = nameArray;
            }
            res.json(returnObject);
        })
    }
    });
    
app.use('/calculatePrice', (req, res) => {
   res.json({ msg : 'It works!' });
    });

app.listen(3000, () => {
	console.log('Listening on port 3000');
    });

app.use('/', (req, res) => {
    var message = {};
    message = req.query.id
	res.json({ msg : message });
    });

// Please do not delete the following line; we need it for testing!
module.exports = app;