import express from 'express';
import Productss from './schema/productshema.js'; // Ensure the path and filename are correct

const upload = express.Router();

// Middleware to parse JSON bodies (if not already done in your main app.js/server.js)
// If you have `app.use(express.json());` in your main file, you might not need this here.
//23

// POST /products - Add a new product
upload.post('/products', async (req, res) => {
    try {
        const { url,name,ram,camera,battery,warranty,price,discount,category } = req.body;

        // Basic validation for required fields
        if (!name || !category) {
            return res.status(400).json({ message: 'Product name and category are required.' });
        }

        // Create a new product instance
        const newProduct = new Productss({
            url,
            name,
            ram,
            camera,
            battery,
            warranty,
            price,
            discount,
            category
            
            // You might want to add a 'createdAt' or 'updatedAt' timestamp here
            // e.g., createdAt: new Date()
        });

        // Save the new product to the database
        const savedProduct = await newProduct.save();

        // Respond with success message and the saved product
        res.status(201).json({
            message: 'Product added successfully!',
            product: savedProduct
        });

    } catch (error) {
        console.error('Error adding product:', error);
        // Provide more specific error details in development, but generalize in production
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
});

// GET /products - Get all products
// upload.get('/products', async (req, res) => {
//     try {
//         const products = await Productss.find({}); // Fetch all products
//         res.status(200).json(products);
//     } catch (error) {
//         console.error('Error fetching products:', error);
//         res.status(500).json({ message: 'Internal server error', error: error.message });
//     }
// });

// GET /products/electronics - Fetch products in "Electronics" category
upload.get('/products/mobiles', async (req, res) => {
  try {
    const products = await Productss.find({ category: 'mobiles' });
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching mobile products:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});


upload.delete('/products', async (req, res) => {
    try {
        const { category, name } = req.query;
        let query = {};

        // At least one filter (category or name) must be provided for this endpoint
        if (category && name) {
            return res.status(400).json({ message: 'Please provide at least a category or a product name to delete.' });
        }

        // Use deleteMany to delete multiple documents matching the query
        const result = await Productss.deleteMany(query);

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'No products found matching the criteria for deletion.' });
        }

        res.status(200).json({
            message: `${result.deletedCount} product(s) deleted successfully!`,
           
        });

    } catch (error) {
        console.error('Error deleting products by category/name:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
});


    
export default upload;