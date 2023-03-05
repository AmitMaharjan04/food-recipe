((hashOperator)=>{
    hashOperator.sum = (a,b)=>{
        return a+b;
    };
    hashOperator.diff=(a,b)=>{
        return a-b
    };
})(module.exports);