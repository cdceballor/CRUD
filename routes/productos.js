module.exports = function(app) {

	var Producto = require('../models/producto.js');

	//GET - Return all Products in the DB
	findAllProduct = function(req, res) {
		Producto.find(function(err, producto) {
			if(!err) {
				console.log('GET /producto')
				res.send(producto);
			} else {
				console.log('ERROR: ' + err);
			}
		});
	};

	//GET - Return a Product with specified ID
	findById = function(req, res) {
		Producto.findById(req.params.id, function(err, producto) {
			if(!err) {
				console.log('GET /producto/' + req.params.id);
				res.send(producto);
			} else {
				console.log('ERROR: ' + err);
			}
		});
	};

	//POST - Insert a new Product in the DB
	addProduct = function(req, res) {
		console.log('POST');
		console.log(req.body);

		var producto = new Producto({
			title:    req.body.title,
			price: 	  req.body.price,
			genre:    req.body.genre,
			summary:  req.body.summary
		});

		producto.save(function(err) {
			if(!err) {
				console.log('Created');
			} else {
				console.log('ERROR: ' + err);
			}
		});

		res.send(producto);
	};

	//PUT - Update a register already exists
	updateProduct = function(req, res) {
		Producto.findById(req.params.id, function(err, producto) {
			producto.title   = req.body.petId;
			producto.price    = req.body.price;
			producto.genre   = req.body.genre;
			producto.summary = req.body.summary;

			producto.save(function(err) {
				if(!err) {
					console.log('Updated');
				} else {
					console.log('ERROR: ' + err);
				}
				res.send(producto);
			});
		});
	}

	//DELETE - Delete a Products with specified ID
	deleteProduct = function(req, res) {
		Producto.findById(req.params.id, function(err, producto) {
			producto.remove(function(err) {
				if(!err) {
					console.log('Removed');
				} else {
					console.log('ERROR: ' + err);
				}
			})
		});
	}

	//Link routes and functions
	app.get('/producto', findAllProduct);
	app.get('/producto/:id', findById);
	app.post('/producto', addProduct);
	app.put('/producto/:id', updateProduct);
	app.delete('/producto/:id', deleteProduct);

}