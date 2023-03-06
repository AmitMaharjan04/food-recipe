((hashOperator)=>{
    hashOperator.sum = (a,b)=>{
        return a+b;
    };
    hashOperator.diff=(a,b)=>{
        return a-b
    };
})(module.exports);

// module.exports = {
//     sum : function(a,b){
//         return a+b;
//     },
//     diff:(a,b)=>{
//         return a-b
//     }
//   };