const updateRecipe=require('../sql/updateRecipe');

(()=>{
    module.exports= async (req,res,next)=>{
        const { name , description} =req.body;
           const created=updateRecipe(name,description);
           console.log("recipe updated successfully");
    }   
})()