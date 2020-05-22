var mongoose = require('mongoose'),
    MSchema = mongoose.Schema;

var monitoriaSchema = new MSchema({
    id_mon: { type: String},
    monName: 		{ type: String },
    price:  	{ type: Number },
    genre: 		{ type: String, enum :
            ['calculo', 'Fisica', 'Matematica', 'Ingles']
    },
    summary: 	{ type: String }
});

module.exports = mongoose.model('Monitoria', monitoriaSchema);