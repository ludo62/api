const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
	{
		lastname: {
			type: String,
			required: true,
			min: 3,
			max: 20,
		},
		firstname: {
			type: String,
			required: true,
			min: 3,
			max: 20,
		},
		address: {
			type: String,
			required: true,
			min: 3,
			max: 100,
		},
		phone: {
			type: String,
			required: true,
			max: 20,
		},
		pseudo: {
			type: String,
			required: true,
			min: 1,
			max: 50,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
