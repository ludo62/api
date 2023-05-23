const ProductModel = require('../models/product.model');

// Create a new product
exports.createProduct = async (req, res) => {
	const { name, size, quantity, color, price } = req.body;
	try {
		const product = await ProductModel.create({
			name,
			size,
			quantity,
			color,
			price,
		});
		res.status(201).json({
			status: 'success',
			data: {
				product,
			},
		});
	} catch (err) {
		res.status(200).send({ err });
	}
};

// Get all products
exports.getAllProducts = async (req, res) => {
	try {
		const products = await ProductModel.find();
		res.status(200).json({
			status: 'success',
			results: products.length,
			data: {
				products,
			},
		});
	} catch (err) {
		res.status(200).send({ err });
	}
};

// Get a product by id
exports.getProductById = async (req, res) => {
	try {
		const product = await ProductModel.findById(req.params.id);
		res.status(200).json({
			status: 'success',
			data: {
				product,
			},
		});
	} catch (err) {
		res.status(200).send({ err });
	}
};

// Update a product by id
exports.updateProduct = async (req, res) => {
	const { name, size, quantity, color, price } = req.body;
	try {
		const product = await ProductModel.findByIdAndUpdate(req.params.id, {
			name,
			size,
			quantity,
			color,
			price,
		});
		res.status(200).json({
			status: 'success',
			data: {
				product,
			},
		});
	} catch (err) {
		res.status(200).send({ err });
	}
};

// Delete a product by id
exports.deleteProduct = async (req, res) => {
	try {
		const product = await ProductModel.findByIdAndDelete(req.params.id);
		res.status(200).json({
			status: 'success',
			data: {
				product,
			},
		});
	} catch (err) {
		res.status(200).send({ err });
	}
};
