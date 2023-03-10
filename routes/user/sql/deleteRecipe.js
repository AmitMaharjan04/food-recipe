const sql=require('../../../validation/mysqlHelper');
const emailName = require('../../../validation/emailValidation');
(()=>{
    module.exports = async(name,email)=>{
        
        const output=await sql.query(`DELETE FROM recipes WHERE name = '${name}' AND email= '${email}'` );
        return output;
    }
})()