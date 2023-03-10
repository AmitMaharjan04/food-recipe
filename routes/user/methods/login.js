const login=require("../../../validation/emailValidation");
const sqlHelper=require("../../../validation/mysqlHelper");
const jwt = require("jsonwebtoken");

const express = require("express");
    const router = express.Router();
(()=>{
    module.exports= async (req,res,next)=>{
        const { email }= req.body;
        const test=await login.existingAccount(req,res);
        if(test==0){
            res.status(400).json({
                message: "Failure to login",
            });
        }
        //    res.status(200).send(`Successful login. Welcome `)
        // }
    }
})()