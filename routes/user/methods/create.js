const createRecipe=require('../sql/createRecipe');

(()=>{
    module.exports= async (req,res,next)=>{
        const { name , description} =req.body;
           const created=createRecipe(name,description);
           console.log(typeof(created));
           console.log("recipe created successfully");
    }   
})()