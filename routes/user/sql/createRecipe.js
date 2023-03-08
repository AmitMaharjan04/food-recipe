const sql=require('../../../validation/mysqlHelper');
const moment = require('moment');

(()=>{
    module.exports = async(name,description)=>{
        
        let date = moment();
        date=date.format("YYYY-MM-DD HH:mm:ss");
        const email="ram@gmail.com";
        const output=await sql.query(`insert into recipes (name,description,email,createdAt,updatedAt) values('${name}','${description}','${email}','${date}','${date}')` );
        return output;
    }
})()