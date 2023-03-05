const emailValidation = require("../../../validation/emailValidation");
const hasher=require("../../../validation/hashing");
(()=>{
    module.exports = async(req,res)=>{
      //  emailValidation(req);
        const {name,email,password} = req.body
        let test=emailValidation.newAccount(req);
        if(!test==false){
          console.log(name,email,password);
          console.log("correct");
        const salt= await hasher.createSalt();
        const hashed=await hasher.computeHash(password.toString(),salt);
        console.log(hashed);
        }
        else{
          console.log("false");
        }
        // const name=req.body.name;
        // const email=req.body.email;
        // const password=req.body.password;
        
    }
})()