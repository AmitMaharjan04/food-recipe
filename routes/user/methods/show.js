const showRecipe=require('../sql/showRecipe');

(()=>{
    module.exports= async (req,res,next)=>{
        // const { name } =req.body;
        const email=req.email
           showRecipe(req,res,email);
           
    }   
})()