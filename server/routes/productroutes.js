const express = require("express");
const productroute = express.Router();
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');  // Specify the directory to save the uploaded files
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));  // Save file with timestamp
    }
});

// file validation 
const fileFilter = (req, file, cb) => {
    // console.log(file);
    // Accept only jpg, jpeg, png file types
    const filetypes = /jpeg|jpg|png/;  
    const isValidType = filetypes.test(path.extname(file.originalname).toLowerCase()) && filetypes.test(file.mimetype);
    
    if (isValidType) {
        cb(null, true); // Accept file
    } else {
        cb(new Error('Only .jpg, .jpeg, and .png format allowed!'), false); // Reject file and throw an error
    }
};


const upload = multer({ storage: storage,
    limits:{fileSize:1000000},
    fileFilter:fileFilter,
 }).fields([
     { name: 'images', maxCount: 1 }, 
     { name: 'main_img', maxCount: 20 } // Single file for 'main_img'
 ]);



// export controller here 
const {getProductBySlug,updateProduct,getallproducts,addproduct,deleteProduct,getproductbyid} = require("../controllers/Products");
const {addcategory,deletecat,fetchallcat,singlcat} = require("../controllers/addcategory");

productroute.get('/get-products',getallproducts);

productroute.post('/addproducts',upload, addproduct);
productroute.get('/deleteProduct/:id', deleteProduct);
productroute.get('/get-productbyid/:id', getproductbyid);
productroute.get('/product/:slug', getProductBySlug);
productroute.post('/update',upload, updateProduct);

// category route goes here 
productroute.post('/addcategory', addcategory);
productroute.get('/deletecat/:id', deletecat);
productroute.get('/singlcat/:id', singlcat);
productroute.get('/fetchallcat', fetchallcat);




module.exports = productroute;