(() => {
    const express = require("express");
    const router = express.Router();
    const userController = require("./methods/index")
    const loggedUserController = require("./loggeduser/index")
    const a=require('./methods/login');
    router.post('/signup',userController.userSignup);  
    router.post('/create',userController.userCreate);  
    router.post('/update',userController.userUpdate);  
    router.post('/delete',userController.userDelete);  
    router.post('/show',userController.userShow);  
    router.post('/login',
        userController.userLogin
    );   
    // router.post('/create',loggedUserController.userCreate);
    module.exports = router;
})()