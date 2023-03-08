const deleteRecipe=require('../sql/deleteRecipe');

(()=>{
    module.exports= async (req,res,next)=>{
        const { name , description} =req.body;
           const created=deleteRecipe(name,description);
           console.log("recipe deleted successfully");
    }   
})()