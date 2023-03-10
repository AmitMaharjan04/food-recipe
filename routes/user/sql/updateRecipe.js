const sql=require('../../../validation/mysqlHelper');
const moment = require('moment');

(()=>{
    module.exports = async(old_name,new_name,description,email)=>{
        
        let date = moment();
        date=date.format("YYYY-MM-DD HH:mm:ss");
        const output=await sql.query(`UPDATE recipes 
        SET 
            name = '${new_name}',
            description = '${description}',
            updatedAt = '${date}'
        WHERE
            email = '${email}' AND name='${old_name}';` );
        return output;
    }
})()