const sql=require('../../../validation/mysqlHelper');

(()=>{
    module.exports = async(req,res,email)=>{
        // console.log(email);
        const output=await sql.query(`select * from recipes where email='${email}'` );
        // console.log(output[0].length);
        // console.log(typeof(output) );
        // res.send(outputname);
        // console.log(output);
    // console.log(output[0][0]);
    // console.log(output.length);
    // // if(output!=null){
        let responseArray = [];
        if(Object.keys(output).length === 0){
            res.status(400).json({
                message: "No recipe has been added yet.",
            });
        }else{
            for (let i = 0; i < output[0].length; i++) {
                responseArray.push({name: output[0][i].name,
                    description : output[0][i].description
                    });
             }
            res.send(responseArray);
           
        }
    //     for(i=0;i<output.length;i++){
    //     //     res.status(200).send(name :output[0][i].name,);
    //         console.log("name =" +output[0][i].name);
    //     //     res.status(200).send("Description  =" +output[0][i].description);
    //     //     res.status(200).send("`````````````````````````````");
    //     }
        
    //    }
    //   else{
    //     res.status(400).json({
    //         message: "Failure to show due to errors",
    //     });
    //   }
      
    }
})()