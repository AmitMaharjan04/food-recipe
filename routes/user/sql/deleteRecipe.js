const sql=require('../../../validation/mysqlHelper');

(()=>{
    module.exports = async(name,description)=>{
        
        const output=await sql.query(`DELETE FROM recipes WHERE name = '${name}'` );
        return output;
    }
})()