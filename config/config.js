'use strict';
const path = require('path');
const dotenv= require('dotenv');
dotenv.config({
  path:path.join(process.cwd(),'.env')
});
module.exports={
  "development": {
    username:process.env.MYSQL_DB_USER,
    host:process.env.MYSQL_DB_HOST,
    port:process.env.MYSQL_DB_PORT,
    database:process.env.MYSQL_DB_NAME,
    dialect: "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
