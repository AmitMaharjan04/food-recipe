const login=require("../../../validation/emailValidation");

(()=>{
    module.exports= async (req)=>{
        const {email,password} =req.body;
        let test=await login.existingAccount(req);
        // console.log(test)
        if(test==1)
        console.log(`welcome ${email}`);
        else
        console.log("incorrect email or password")
    }
})()