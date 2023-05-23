require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
// lancement du serveur
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Création des routes
app.use('/', userRoutes);
app.use('/', productRoutes);

const corsOptions = {
	Credentials: true,
	optionsSuccessStatus: 200,
	methods: 'GET, PUT, POST, DELETE, PATCH, OPTIONS',
	preflightContinue: false,
};

app.use(cors(corsOptions));

const connectDB = async () => {
	try {
		const con = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB connected: ${con.connection.host}`);
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};

//Connect to the database before listening
connectDB().then(() => {
	app.listen(PORT, () => {
		console.log(`Server running on port ${PORT}`);
	});
});
