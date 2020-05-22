var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var proveedorSchema = new Schema({
    id_proveedor: { type: String},
    id_mon: { type: String},
    id_product: { type: String},
    name: 		{ type: String },
    email:  	{ type: String },
    category: 		{ type: String, enum :
            ['Vendedor', 'Monitor']
    },
    university: 	{ type: String },
    phone: 	{ type: String },
    inventory: 	{ type: String },

});

module.exports = mongoose.model('Proveedor', proveedorSchema);

//var categorySchema = new Schema({
    //id_cat: { type: String},
    //catName: 		{ type: String },
    //genre: 		{ type: String, enum :
// ['calculo', 'ingles', 'fisica', 'matematica']
// },
// });

