var mongoose = require('mongoose');

// note: your host/port number may be different!
mongoose.connect('mongodb+srv://Bmin:<dDAuw7gEuq0ypKh4>@sd4xhw6node-h1wp1.mongodb.net/test?retryWrites=true');

var Schema = mongoose.Schema;

var toySchema = new Schema( {
	id: {type: String, required: true, unique: true},
	name: {type: String, required: true},
	price: Number
    } );


module.exports = mongoose.model('Toy', toySchema);
