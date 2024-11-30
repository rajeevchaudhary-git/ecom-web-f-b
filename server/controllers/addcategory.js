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

exports.addcategory =(req,res)=>{
    try {
        const {category_name,status,desc}=req.body;
        if(!category_name){
            return res.status(300).json({
                message:"category name is required",
                error:1
            })
        }
        else{
          const sqlquery = `insert into category (category_name,isactive,description) values(?,?,?)`;
          const values=[category_name,status?status:1,desc?desc:"not provided"];
          conn.query(sqlquery,values,(error,result)=>{
                if(error){
                    return res.status(500).json({
                        message:error,
                        err:1,
                    });
                }
                else{
                    return res.status(200).json({
                        message:"data inserted sucessfully",
                        error:0
                    })
                }
          });
        }
    } catch (error) {
        return res.status(500).json({
            message:"internal server error",
            error:error
        });
    }
}

exports.deletecat = (req,res)=>{
    try {
        const { id } = req.params;
        if(id){
            const querydel = `delete from category where id=${id}`;
            conn.query(querydel,(error,result)=>{
                if(result){
                    return res.status(200).json({
                        message:"deleted sucessfully",
                        responsecode:1
                    })
                }
                else{
                    return res.status(400).json({
                        message:"error in deleting",
                        responsecode:0
                    })
                }
            })
        }
    } catch (error) {
        return res.status(500).json({
            message:"server error",
            error:error,
            responsecode:0
        })
    }
}
exports.fetchallcat = (req,res)=>{
    try {
        const queryfetch = 'select * from category';
        conn.query(queryfetch,(error,result)=>{
            if(result){
                return res.status(200).json({
                    data:result,
                    responsecode:1
                });
            }
            else{
                return res.status(400).json({
                    message:"error in fetching data",
                    responsecode:0
                })
            }
        })
    } catch (error) {
        return res.status(500).json({
            message:"server error",
            error:error,
            responsecode:0
        })
    }
}

exports.singlcat =(req,res)=>{
    try {
        const {id}= req.params;
        const fetchsingle = `select * from category where id =${id}`;
        conn.query(fetchsingle,(error,result)=>{
            if(result[0]!=null){
                return res.status(200).json({
                    data:result[0],
                    responsecode:1
                });
            }
            else{
                return res.status(400).json({
                    message:"error in fetching data and invalid id ",
                    responsecode:0
                })
            }
        })
    } catch (error) {
        return res.status(500).json({
            message:"server error",
            error:error,
            responsecode:0
        })
    }
}

exports.upadtecat = ()=>{
    // todo
}