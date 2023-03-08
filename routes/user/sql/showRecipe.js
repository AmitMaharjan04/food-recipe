const sql=require('../../../validation/mysqlHelper');

(()=>{
    module.exports = async(req)=>{
        const {email} =req.body;
        const output=await sql.query(`select * from recipes where email='${email}'` );
    console.log(output);
      for(i=0;i<output.length;i++){
            console.log("name =" +output[0][i].name);
            console.log("Description  =" +output[0][i].description);
            console.log("`````````````````````````````");
        }
    }
})()