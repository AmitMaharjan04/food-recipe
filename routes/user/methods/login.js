const login=require("../../../validation/emailValidation");
const sqlHelper=require("../../../validation/mysqlHelper");

(()=>{
    module.exports= async (req)=>{
        const {email,password} =req.body;
        // let obj="";
        // console.log("in login");
        // const output="";
        // output=await sql.mysqlHelper.query("Select * from logins");
        // console.log("after sql");
        // console.log (output);
        // obj=output[0][0];
        // console.log(obj)
        // return obj;

        const test=await sqlHelper.query("select * from logins where id=1");
        console.log(test);
        // let test=await login.existingAccount(req);
        // // console.log(test)
        // if(test==1)
        // console.log(`welcome ${email}`);
        // else
        // console.log("incorrect email or password")
    }
})()