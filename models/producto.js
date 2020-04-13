var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var productoSchema = new Schema({
	title: 		{ type: String },
	price:  	{ type: Number },
	genre: 		{ type: String, enum :
			['Food', 'Technology', 'Home', 'Other']
	},
	summary: 	{ type: String }
});


module.exports = mongoose.model('Producto', productoSchema);