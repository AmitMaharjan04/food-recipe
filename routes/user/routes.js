(() => {
    const express = require("express");
    const router = express.Router();
    const userController = require("./methods/index")
    
    router.post('/signup',userController.userSignup);
    // router.post('/search',userController.userSearch);  
    // router.post('/login',userController.userLogin);  
    // router.post('/update',userController.user_update);  

    module.exports = router;
})()