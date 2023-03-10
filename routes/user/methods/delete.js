const deleteRecipe=require('../sql/deleteRecipe');

(()=>{
    module.exports= async (req,res,next)=>{
        const { name } =req.body;
        const email=req.email;
           const created=deleteRecipe(name,email);
           if(Object.keys(created).length === 0){
            res.status(200).send("Recipe deleted successfully ");
           }
          else{
            res.status(400).json({
                message: "Failure to delete recipe due to errors",
            });
          }
    }   
})()