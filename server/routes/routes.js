const express = require("express");
const router = express.Router(); 

// const {singup,login,test}  = require("../controllers/auth");  import controller here 

router.get('/home', (req, res) => {
    res.send('homepage');
});

module.exports = router;
