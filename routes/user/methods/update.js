const updateRecipe=require('../sql/updateRecipe');

(()=>{
    module.exports= async (req,res,next)=>{
        const { name , description} =req.body;
           const created=updateRecipe(name,description);
           if(Object.keys(created).length === 0){
            res.status(200).send("Recipe updated successfully ");
           }
          else{
            res.status(400).json({
                message: "Failure to update recipe due to errors",
            });
          }
    }   
})()