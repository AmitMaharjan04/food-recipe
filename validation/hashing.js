((hashOperator)=>{
    const bcrypt = require('bcryptjs');
    module.exports ={
        haha : function(){
        const a="haha"
        return a;
        },
     computeHash :function (sourcePassword,salt){
        return bcrypt.hash(sourcePassword,salt)
    },
    createSalt : function(){
        return bcrypt.genSalt(8);
    },
    comparePassword : function (inputPwd, hash){
        return bcrypt.compare(inputPwd,hash)
    }
    }

    // hashOperator.computeHash = (sourcePassword,salt)=>{
    //     return bcrypt.hash(sourcePassword,salt)
    // };
    // hashOperator.createSalt=()=>{
    //     return bcrypt.genSalt(8);
    // };
    // hashOperator.comparePassword = async(inputPwd, hash)=>{
    //     return bcrypt.compare(inputPwd,hash)
    // };
})(module.exports);