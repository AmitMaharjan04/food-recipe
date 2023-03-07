const sql=require('../../../validation/mysqlHelper');
const moment = require('moment');

(()=>{
    module.exports = async(fname,lname,email,password)=>{
        
        let date = moment();
        date=date.format("YYYY-MM-DD HH:mm:ss");
        const output=await sql.query(`insert into users (firstName,lastName,email,password,createdAt,updatedAt) values('${fname}','${lname}','${email}','${password}','${date}','${date}')` );
        return output;
    }
})()