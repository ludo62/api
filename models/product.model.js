const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			min: 3,
			max: 20,
		},
		size: {
			type: String,
			required: true,
			min: 3,
			max: 20,
		},
		quantity: {
			type: Number,
			required: true,
			min: 1,
			max: 100,
		},
		color: {
			type: String,
			required: true,
			min: 3,
			max: 20,
		},
		price: {
			type: Number,
			required: true,
			min: 1,
			max: 100,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
