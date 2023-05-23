const router = require('express').Router();
const userController = require('../controllers/user.controller');

// Create a new user
router.post('/api/register', userController.register);

// Get all users
router.get('/api/users', userController.getAllUsers);

// Get one user
router.get('/api/users/:id', userController.getOneUser);

// Update one user
router.put('/api/users/:id', userController.updateOneUser);

// Delete one user
router.delete('/api/users/:id', userController.deleteOneUser);

module.exports = router;
