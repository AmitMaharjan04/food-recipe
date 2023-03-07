const emailValidation = require("../../../validation/emailValidation");
const hasher=require("../../../validation/hashing");
const sql=require('../sql/insert');
const sqlHelper= require("../../../validation/mysqlHelper");
const moment = require('moment');

(()=>{
    module.exports = async(req,res)=>{
      //  emailValidation(req);
      let hashed= "";
        const {firstname,lastname,email,password} = req.body
        let test= await emailValidation.newAccount(req);
        if(!test==false){
          // console.log(firstname,lastname,email,password);
        const salt= await hasher.createSalt();
        hashed=await hasher.computeHash(password.toString(),salt);
        // console.log(hashed);
        }
        else{
          console.log("email already exists.Please enter different email.");
        }
        const output=sql(firstname,lastname,email,hashed);
        if(output){
          let date = moment();
          date=date.format("YYYY-MM-DD HH:mm:ss");
          await sqlHelper.query(`insert into logins (email,password,createdAt,updatedAt) values('${email}','${hashed}','${date}','${date}')` );
          console.log("success");
        }
    }
})()