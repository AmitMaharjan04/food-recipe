(() => {
    const express = require("express");
    const router = express.Router();
    const userController = require("./methods/index")
    const a=require('./methods/login');
    const auth = require("../../middlewares/auth");

    router.post('/signup',userController.userSignup);  
    router.post('/create', auth ,userController.userCreate);  
    router.post('/update',auth,userController.userUpdate);  
    router.post('/delete',auth,userController.userDelete);  
    router.post('/show',auth,userController.userShow);  
    router.post('/login',
        userController.userLogin
    );   
    // router.post('/create',loggedUserController.userCreate);
    module.exports = router;
})()