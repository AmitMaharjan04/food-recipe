const sql=require('../../../validation/mysqlHelper');
const emailName = require('../../../validation/emailValidation');
(()=>{
    module.exports = async(name)=>{
        
    
        const output=await sql.query(`DELETE FROM recipes WHERE name = '${name}' & email= '${emailName}'` );
        return output;
    }
})()