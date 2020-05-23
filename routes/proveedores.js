module.exports = function(app) {

    var Proveedor = require('../models/proveedor.js');

    //GET - Return all Products in the DB
    findAllProveedor = function(req, res) {
        Proveedor.find(function(err, proveedor) {
            if(!err) {
                console.log('GET /proveedor')
                res.send(proveedor);
            } else {
                console.log('ERROR: ' + err);
            }
        });
    };

    //GET - Return a Product with specified ID
    findById = function(req, res) {
        Proveedor.findById(req.params.id, function(err, proveedor) {
            if(!err) {
                console.log('GET /proveedor/' + req.params.id);
                res.send(proveedor);
            } else {
                console.log('ERROR: ' + err);
            }
        });
    };

    //POST - Insert a new Product in the DB
    addProveedor = function(req, res) {
        console.log('POST');
        console.log(req.body);

        var proveedor = new Proveedor({
            name:    req.body.name,
            email: 	  req.body.email,
            category:    req.body.category,
            university:  req.body.university,
            phone:  req.body.phone,
            inventory:  req.body.inventory
        });

        proveedor.save(function(err) {
            if(!err) {
                console.log('Created');
            } else {
                console.log('ERROR: ' + err);
            }
        });

        res.send(proveedor);
    };

    //PUT - Update a register already exists
    updateProveedor = function(req, res) {
        Proveedor.findById(req.params.id, function(err, proveedor) {
            proveedor.name   = req.body.petId;
            proveedor.email    = req.body.email;
            proveedor.category   = req.body.category;
            proveedor.university = req.body.university;
            proveedor.phone = req.body.phone;
            proveedor.inventory = req.body.inventory;

            proveedor.save(function(err) {
                if(!err) {
                    console.log('Updated');
                } else {
                    console.log('ERROR: ' + err);
                }
                res.send(proveedor);
            });
        });
    }

    //DELETE - Delete a Products with specified ID
    deleteProveedor = function(req, res) {
        Proveedor.findById(req.params.id, function(err, proveedor) {
            proveedor.remove(function(err) {
                if(!err) {
                    console.log('Removed');
                } else {
                    console.log('ERROR: ' + err);
                }
            })
        });
    }

    //Link routes and functions
    app.get('/proveedor', findAllProveedor);
    app.get('/proveedor/:id', findById);
    app.post('/proveedor', addProveedor);
    app.put('/proveedor/:id', updateProveedor);
    app.delete('/proveedor/:id', deleteProveedor);

}

/*
Probando el CRUD
Put: http://localhost:3000/tvshow/5ea90d5aba92cf2319000001
Delete:
 */