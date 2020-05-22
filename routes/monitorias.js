module.exports = function(app) {

    var Monitoria = require('../models/monitoria.js');

    //GET - Return all Products in the DB
    findAllMonitoria = function(req, res) {
        Monitoria.find(function(err, monitoria) {
            if(!err) {
                console.log('GET /monitoria')
                res.send(monitoria);
            } else {
                console.log('ERROR: ' + err);
            }
        });
    };

    //GET - Return a Product with specified ID
    findById = function(req, res) {
        Monitoria.findById(req.params.id, function(err, monitoria) {
            if(!err) {
                console.log('GET /monitoria/' + req.params.id);
                res.send(monitoria);
            } else {
                console.log('ERROR: ' + err);
            }
        });
    };

    //POST - Insert a new Product in the DB
    addMonitoria = function(req, res) {
        console.log('POST');
        console.log(req.body);

        var monitoria = new Monitoria({
            //id_mon:     req.body.id_mon,
            monName:    req.body.monName,
            price: 	  req.body.price,
            genre:    req.body.genre,
            summary:  req.body.summary
        });

        monitoria.save(function(err) {
            if(!err) {
                console.log('Created');
            } else {
                console.log('ERROR: ' + err);
            }
        });

        res.send(monitoria);
    };

    //PUT - Update a register already exists
    updateMonitoria = function(req, res) {
        Monitoria.findById(req.params.id, function(err, monitoria) {
            monitoria.monName    = req.body.id_mon;
            monitoria.price    = req.body.price;
            monitoria.genre   = req.body.genre;
            monitoria.summary = req.body.summary;

            monitoria.save(function(err) {
                if(!err) {
                    console.log('Updated');
                } else {
                    console.log('ERROR: ' + err);
                }
                res.send(monitoria);
            });
        });
    }

    //DELETE - Delete a Products with specified ID
    deleteMonitoria = function(req, res) {
        Monitoria.findById(req.params.id, function(err, monitoria) {
            monitoria.remove(function(err) {
                if(!err) {
                    console.log('Removed');
                } else {
                    console.log('ERROR: ' + err);
                }
            })
        });
    }

    //Link routes and functions
    app.get('/monitoria', findAllMonitoria);
    app.get('/monitoria/:id', findById);
    app.post('/monitoria', addMonitoria);
    app.put('/monitoria/:id', updateMonitoria);
    app.delete('/monitoria/:id', deleteMonitoria);

}

/*
Probando el CRUD
Put: http://localhost:3000/tvshow/5ea90d5aba92cf2319000001
Delete:
 */