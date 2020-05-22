var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var productoSchema = new Schema({
	id_product: { type: String},
	productName: 		{ type: String },
	price:  	{ type: Number },
	genre: 		{ type: String, enum :
			['Food', 'Technology', 'Home', 'Other']
	},
	summary: 	{ type: String },
	quantify: 	{ type: Number }
});

module.exports = mongoose.model('Producto', productoSchema);