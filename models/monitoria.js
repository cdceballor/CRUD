var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var monitoriaSchema = new Schema({
    id_mon: { type: String},
    monName: 		{ type: String },
    price:  	{ type: Number },
    genre: 		{ type: String, enum :
            ['calculo', 'Fisica', 'Matematica', 'Ingles']
    },
    summary: 	{ type: String }
});

module.exports = mongoose.model('Monitoria', monitoriaSchema);