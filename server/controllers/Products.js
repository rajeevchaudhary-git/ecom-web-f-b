const express = require("express");
const db = require('../configs/db');
const mysql  = require("mysql2");

const conn = mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"root",
    database: "foodstore"
});

conn.connect((err)=>{
    if(err){
        throw err;
    }
    else{
        console.log("connected");
    }
});

// controller functions 

exports.getallproducts = async(req,res)=>{
    try {
        const sql = 'SELECT * FROM products';
        db.query(sql,(err,result)=>{
         if(err){
            console.log("error in fetching products");
         }
         else{
            return res.json(result);
         }
        })

    } catch (error) {
        console.log(error);     
    }
}

exports.addproduct = (req, res) => {
    const { title, description,customdesc, price, categoryid,is_active,brand,quantity,discount_price,status,shipping_cost,tags } = req.body;
    // console.log(req.body);
    const additionalImages = req.files.images ? req.files.images.map(file => file.filename) : [];
    const image =  JSON.stringify(additionalImages)
    const mainImage = req.files.main_img ? req.files.main_img[0].filename : null;
    // console.log(mainImage);
    // const mainImage = req.file ? req.file.filename : null;
    //  console.log(image);
   

    // Validate required fields
    if (title && description && price  && categoryid && shipping_cost && quantity) {
        const sql = 'INSERT INTO products (title, short_des, customdesc, price, categoryid, image,more_img, is_active,brand,quantity,discount_price,status,shipping_cost,tags) VALUES (?, ?, ?, ?, ?, ?,?,?,?,?,?,?,?,?)';
        const values = [title, description, customdesc, price, categoryid, image,mainImage,is_active,brand,quantity,discount_price,status,shipping_cost,tags];

        // Execute the SQL query
        conn.query(sql, values, (err, result) => {
            if (err) {
                console.error('Error inserting product:', err);
                return res.status(500).json({ error: 'Database error' });
            }
            res.status(201).json({ message: 'Product added successfully', productId: result.insertId });
        });
    } else {
        return res.status(400).json({
            error: 'All the following fields are required: title, description, price, categoryid, shipping_cost, quantity'
        });
        }
};


// edit product get id from url 

// delete product by id 
exports.deleteProduct = (req, res) => {
    try {
        // Extracting the product ID from route parameters
        const { id } = req.params;

        // Validate if the ID exists in the database
        const validateIdQuery = 'SELECT title FROM products WHERE id = ?';
        conn.query(validateIdQuery, [id], (error, result) => {
            if (error) {
                console.error('Error fetching product:', error);
                return res.status(500).json({ error: 'Database error while validating product' });
            }

            if (result.length > 0) {
                // If the product exists, proceed to delete it
                const deleteQuery = 'DELETE FROM products WHERE id = ?';
                conn.query(deleteQuery, [id], (err, deleteResult) => {
                    if (err) {
                        console.error('Error deleting product:', err);
                        return res.status(500).json({ error: 'Database error while deleting product' });
                    }

                    res.status(200).json({ message: 'Product deleted successfully' });
                });
            } else {
                // If the product with the provided ID doesn't exist
                res.status(404).json({ message: 'Product not found or invalid ID' });
            }
        });
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};


exports.getproductbyid =  (req, res) => {
    try {
        const { id } = req.params;
        if (id) {
            const validateIdQuery = 'SELECT * FROM products WHERE id = ?';
            conn.query(validateIdQuery, [id], (error, result) => {
                if (error) {
                    console.error(error);
                    return res.status(500).json({
                        message: "Error fetching product",
                        responsecode: 0
                    });
                }

                if (result.length > 0) {
                    return res.status(200).json({ singleProduct: result[0] });
                } else {
                    return res.status(404).json({
                        message: "Product not found",
                        responsecode: 0
                    });
                }
            });
        } else {
            return res.status(400).json({
                message: "Product ID is required",
                responsecode: 0
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            responsecode: 0
        });
    }
};

exports.updateProduct = (req, res) => {
    try {
        const { id ,title, description, customdesc, price, categoryid, is_active, brand, quantity, discount_price, status, shipping_cost, tags } = req.body;
        
        const mainImage = req.files.images ? req.files.images.map(file => file.filename) : [];
        const image = JSON.stringify(mainImage);
        const additionalImages = req.files.main_img ? req.files.main_img[0].filename : null;
        
        // Validate required fields
        if (id && title && description && price && categoryid && shipping_cost && quantity) {
            const sql = `UPDATE products SET 
                title = ?, 
                short_des = ?, 
                customdesc = ?, 
                price = ?, 
                categoryid = ?, 
               
                is_active = ?, 
                brand = ?, 
                quantity = ?, 
                discount_price = ?, 
                status = ?, 
                shipping_cost = ?, 
                tags = ? 
                WHERE id = ${id}`;

            const values = [title, description, customdesc, price, categoryid,  is_active, brand, quantity, discount_price, status, shipping_cost, tags];

            // Execute the SQL query
            conn.query(sql, values, (err, result) => {
                if (err) {
                    console.error('Error updating product:', err);
                    return res.status(500).json({ error: 'Database error' });
                }
                res.status(200).json({ message: 'Product updated successfully' });
                // console.log(result);
            });
        } else {
            return res.status(400).json({
                error: 'All the following fields are required: id, title, description, price, categoryid, shipping_cost, quantity'
            });
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Server error' });
    }
};


exports.getProductBySlug = (req, res) => {
    try {
        // Extracting the slug from route parameters
        const { slug } = req.params;

        // Validate if the slug exists in the database
        const validateSlugQuery = 'SELECT * FROM products WHERE slug = ?';
        conn.query(validateSlugQuery, [slug], (error, result) => {
            if (error) {
                console.error('Error fetching product by slug:', error);
                return res.status(500).json({ error: 'Database error while fetching product by slug' });
            }

            if (result.length > 0) {
                // If the product exists, return the product details
                return res.status(200).json({ product: result[0] });
            } else {
                // If no product is found with the given slug
                return res.status(404).json({ message: 'Product not found with the given slug' });
            }
        });
    } catch (error) {
        console.error('Server error:', error);
        return res.status(500).json({ message: 'Server error while fetching product by slug' });
    }
};


