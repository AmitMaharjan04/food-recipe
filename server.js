const express=require('express');
const cors=require("cors");
const bodyParser=require("body-parser");
require('dotenv').config();
const port=3000;
const app=express();

// const signup=require("./routes/user/methods/signup")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors({origin: "*"}));
app.set("port",port);

const routes = require("./routes/routes")
app.use("/api",routes)

// app.post('/sign', (req,res)=>{
//     console.log("here")
//     signup(req);
// })
app.listen(port, ()=>{
    console.log(`listening to port ${port}`);
})