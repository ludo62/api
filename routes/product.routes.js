const router = require('express').Router();
const productController = require('../controllers/product.controller');

// Create a new product
router.post('/api/products/register', productController.createProduct);

// Get all products
router.get('/api/products', productController.getAllProducts);

// Get a product by id
router.get('/api/products/:id', productController.getProductById);

// Update a product by id
router.put('/api/products/:id', productController.updateProduct);

// Delete a product by id
router.delete('/api/products/:id', productController.deleteProduct);

module.exports = router;
