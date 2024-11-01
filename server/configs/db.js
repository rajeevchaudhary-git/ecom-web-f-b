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

module.exports = conn;