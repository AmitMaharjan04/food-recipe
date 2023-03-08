const sql=require('../../../validation/mysqlHelper');
const moment = require('moment');

(()=>{
    module.exports = async(name,description)=>{
        
        let date = moment();
        date=date.format("YYYY-MM-DD HH:mm:ss");
        const output=await sql.query(`UPDATE recipes 
        SET 
            name = '${name}',
            description = '${description}',
            updatedAt = '${date}'
        WHERE
            email = "ram123@gmail.com";` );
        return output;
    }
})()