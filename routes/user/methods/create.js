const createRecipe=require('../sql/createRecipe');

(()=>{
    module.exports= async (req,res,next)=>{
       
        const { name , description} =req.body;
        const email=req.email;
        // console.log(email);
           const created=createRecipe(name,description,email);
           if(Object.keys(created).length === 0){
            res.status(200).send("Recipe created successfully ");
           }
          else{
            res.status(400).json({
                message: "Failure to create recipe due to errors",
            });
          }
    }   
})()