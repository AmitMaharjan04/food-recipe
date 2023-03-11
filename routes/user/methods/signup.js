const emailValidation = require("../../../validation/emailValidation");
const hasher=require("../../../validation/hashing");
const sql=require('../sql/insert');
const sqlHelper= require("../../../validation/mysqlHelper");
const moment = require('moment');

(()=>{
    module.exports = async(req,res)=>{
      let hashed= "";
        let {firstname,lastname,email,password} = req.body
        let test= await emailValidation.newAccount(req,res);
        if(test==true){
          firstname=firstname.trim();
          lastname=lastname.trim();
         
        const salt= await hasher.createSalt();
        hashed=await hasher.computeHash(password.toString(),salt);
        // console.log(hashed);
        const output=sql(firstname,lastname,email,hashed);
        if(output){
          let date = moment();
          date=date.format("YYYY-MM-DD HH:mm:ss");
          await sqlHelper.query(`insert into logins (email,password,createdAt,updatedAt) values('${email}','${hashed}','${date}','${date}')` );
          res.status(200).send("User created successfully ");
        }
        }
        // else if(test==1){ 
        //   res.status(400).json({ error: 'first ' });
        // }
        // else if(test==2){ 
        //   res.status(400).json({ error: 'last ' });
        // }else if(test==3){ 
        //   res.status(400).json({ error: 'email ' });
        // }else if(test==4){ 
        //   res.status(400).json({ error: 'Password' });
        // }else if(test==5){ 
        //   res.status(400).json({ error: 'not valid email format' });
        // }else if(test==6){ 
        //   res.status(400).json({ error: 'password should contain 10-20 alphabets.' });
        // }else if(test==7){ 
        //   res.status(400).json({ error: 'email already exist ' });
        // }
        // else{
        //   res.status(400).json({
        //     message: "Email already exists.Please enter different email.",
        // });
        //   // console.log("email already exists.Please enter different email.");
        // }
        
    }
})()