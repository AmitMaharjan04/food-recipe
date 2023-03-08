const express=require('express');
const cors=require("cors");
const bodyParser=require("body-parser");
const jsonwebtoken = require("jsonwebtoken");
require('dotenv').config();
const port=3000;
const app=express();

// const signup=require("./routes/user/methods/signup")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors({origin: "*"}));
app.set("port",port);

const mysqlHelper=require("./validation/mysqlHelper");
const routes = require("./routes/routes")
app.use("/api",routes)

// app.get("/super-secure-resource", (req, res) => {
//     res
//       .status(401)
//       .json({ message: "You need to be logged in to access this resource" });
//   });

// app.post('/sign', (req,res)=>{
//     console.log("here")
//     signup(req);
// })
app.listen(port, ()=>{
    mysqlHelper.init();
    console.log(`listening to port ${port}`);
})