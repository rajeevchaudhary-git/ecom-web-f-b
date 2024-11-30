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

exports.addtocart = (req, res) => {
    const { productid, sessionid, userid, qty } = req.body;

    if (!productid || !qty) {
        return res.status(400).json({ error: 'Invalid product ID or quantity' });
    }

    // Step 1: Check if the product exists and is active
    const productQuery = `SELECT id, title, price, image FROM products WHERE id = ? AND is_active = '1'`;
    conn.query(productQuery, [productid], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database error while checking product' });
        }

        if (result.length === 0) {
            return res.status(404).json({ error: 'Product not found or inactive' });
        }

        // Step 2: Check if the product is already in the cart
        const sessionOrUserId = userid ? userid : sessionid;
        const checkCartQuery = `
            SELECT * FROM cart WHERE productid = ?
        `;
        conn.query(checkCartQuery, [productid], (err, cartResult) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Database error while checking cart' });
            }

            if (cartResult.length > 0) {
                // Product already in cart, update the quantity
                const updateCartQuery = `
                    UPDATE cart SET qty = qty + ? WHERE productid = ?
                `;
                conn.query(updateCartQuery, [1, productid, sessionOrUserId], (err, updateResult) => {
                    if (err) {
                        console.error(err);
                        return res.status(500).json({ error: 'Database error while updating cart' });
                    }

                    return res.status(200).json({ success: 'Product quantity updated in cart' });
                });
            } else {
                // Product not in cart, insert as a new entry
                const insertCartQuery = `
                    INSERT INTO cart (productid, user, qty) 
                    VALUES (?, ?, ?)
                `;
                conn.query(insertCartQuery, [productid, sessionOrUserId, qty], (err, insertResult) => {
                    if (err) {
                        console.error(err);
                        return res.status(500).json({ error: 'Database error while adding product to cart' });
                    }

                    return res.status(200).json({ success: 'Product added to cart' });
                });
            }
        });
    });
};

