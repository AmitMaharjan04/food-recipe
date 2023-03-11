const mysql = require('mysql2/promise');
((mysqlHelper)=>{
    let dbClient = null;
    let tranConn= null;
    mysqlHelper.init = async() =>{
        try{
            if(!dbClient){
                dbClient  = await mysql.createPool({
                    user:process.env.MYSQL_DB_USER,
                    host:process.env.MYSQL_DB_HOST,
                    port:process.env.MYSQL_DB_PORT,
                    database:process.env.MYSQL_DB_NAME,
                    waitForConnections: true,
                    connectionLimit: 10,
                    queueLimit: 0
                });  
            }
            return dbClient;
            
        }catch(error){
                throw error;
        }
    };
    
    mysqlHelper.query = async(query, fields, metaData)=>{
        try{
            // console.log(dbClient.host)
            let res=await dbClient.query(query,fields);
            // console.log(res);
            // console.log(query);
            // console.log(fields);
            return res;
        }catch(error){
            throw error;
    }
    }
   

})(module.exports);
