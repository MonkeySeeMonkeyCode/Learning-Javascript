var mongoose = require('mongoose');

// note: your host/port number may be different!
mongoose.connect('mongodb+srv://Bmin:<dDAuw7gEuq0ypKh4>@sd4xhw6node-h1wp1.mongodb.net/test?retryWrites=true');

var Schema = mongoose.Schema;

var animalSchema = new Schema( {
	name: {type: String, required: true, unique: true},
	species: {type: String, required: true},
	breed: String,
	gender: {type: String, enum: ['male', 'female']},
	traits: [String],
	age: Number
    } );


module.exports = mongoose.model('Animal', animalSchema);
