const UserModel = require('../models/user.model');

// Create a new user
exports.register = async (req, res) => {
	const { lastname, firstname, address, phone, pseudo } = req.body;
	try {
		const user = await UserModel.create({
			lastname,
			firstname,
			address,
			phone,
			pseudo,
		});
		res.status(201).json({
			status: 'success',
			data: {
				user,
			},
		});
	} catch (err) {
		res.status(200).send({ err });
	}
};

// Get all users
exports.getAllUsers = async (req, res) => {
	try {
		const users = await UserModel.find();
		res.status(200).json({
			status: 'success',
			results: users.length,
			data: {
				users,
			},
		});
	} catch (err) {
		res.status(200).send({ err });
	}
};

// Get one user
exports.getOneUser = async (req, res) => {
	try {
		const user = await UserModel.findById(req.params.id);
		res.status(200).json({
			status: 'success',
			data: {
				user,
			},
		});
	} catch (err) {
		res.status(200).send({ err });
	}
};

// Update one user
exports.updateOneUser = async (req, res) => {
	const { lastname, firstname, address, phone, pseudo } = req.body;
	try {
		const user = await UserModel.findByIdAndUpdate(req.params.id, {
			lastname,
			firstname,
			address,
			phone,
			pseudo,
		});
		res.status(200).json({
			status: 'success',
			data: {
				user,
			},
		});
	} catch (err) {
		res.status(200).send({ err });
	}
};

// Delete one user
exports.deleteOneUser = async (req, res) => {
	try {
		await UserModel.findByIdAndDelete(req.params.id);
		res.status(200).json({
			status: 'success',
			data: null,
		});
	} catch (err) {
		res.status(200).send({ err });
	}
};
