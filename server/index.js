const express = require('express');
const app = express();
const cors = require('cors');

// importing routes here 
const routes = require("./routes/routes");
const productroute = require('./routes/productroutes');
// end import route here 
const db = require('./configs/db');

app.use(express.json());
app.use(cors({
    origin: '*', // Replace with your frontend URL
    methods: ['GET', 'POST'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));

// Serve static files from the "uploads" folder
app.use('/uploads', express.static('uploads'));

app.get('/users', (req, res) => {
    const sql = 'SELECT * FROM products';  

    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).send('Database query error: ' + err);
        }
        res.json(results);  // Send the results as a JSON response
    });
});

// route mounting here
app.use("/api/v1", routes, productroute);
//end of mounting here 

app.listen(3000, () => {
    console.log('App is running on port 3000');
});
