const sql=require('../../../validation/mysqlHelper');
const moment = require('moment');
const emailName = require('../../../validation/emailValidation');
const userEmail = require('../../../middlewares/auth');
(()=>{
    module.exports = async(name,description,email)=>{
        // console.log(emailName)
        let date = moment();
        // const email ="shyam123@gmail.com"
        date=date.format("YYYY-MM-DD HH:mm:ss");
        const output=await sql.query(`insert into recipes (name,description,email,createdAt,updatedAt) values('${name}','${description}','${email}','${date}','${date}')` );
        return output;
    }
})()