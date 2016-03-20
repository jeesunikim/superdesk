var mongoose = require('mongoose'),
	shortid = require('shortid'),
	db = mongoose.connection;

mongoose.connect('mongodb://localhost/barbarians');

db.on('error', console.error.bind(console, 'mongodb connection error:'));

var barbarianSchema = new mongoose.Schema({
	_id: {
		type: String,
		unique: true,
		default: shortid.generate
	},
	name: String,
	department: String,
	seating: {
		x: Number,
		y: Number,
		r: Number
	},
	executive: Boolean
});

module.exports = mongoose.model('Barbarian', barbarianSchema);