const login=require("../../../validation/emailValidation");
const sqlHelper=require("../../../validation/mysqlHelper");
const jwt = require("jsonwebtoken");

const express = require("express");
    const router = express.Router();
(()=>{
    module.exports= async (req,res,next)=>{
        const { email }= req.body;
        await login.existingAccount(req,res);
        // if(test==0){
        //     console.log("Incorrect email or password")
        // }else {
        //    res.status(200).send(`Successful login. Welcome `)
        // }
    }
})()