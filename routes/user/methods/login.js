const login=require("../../../validation/emailValidation");
const sqlHelper=require("../../../validation/mysqlHelper");
const express = require("express");
    const router = express.Router();
    const loggedUserController = require("../loggeduser/index");
(()=>{
    module.exports= async (req,res,next)=>{
        let test=await login.existingAccount(req);
        if(test==0){
            console.log("Incorrect email or password")
        }else {
            // await res.redirect('http://127.0.0.1:3000/api/user/create');
            console.log("loggedin");
            
        }
    }
})()