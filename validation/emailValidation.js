const emailCheck=new RegExp(/^([a-zA-Z0-9\.\_])+@([a-zA-Z0-9])+.com$/);

const newAccount= async (req) =>{
    const {email,password}=req.body;
    
    const pass=new RegExp(/^[a-zA-Z0-9]{6,10}$/);
    // const phoneCheck=new RegExp(/^[0-9]{10}$/);
    let valid=false;
        if(emailCheck.test(email) ==true){
        valid=true;
        }
        if(pass.test(password)==true){
        valid=true;
        }
        // if(phoneCheck.test(phone)==true){
        // valid=true;
        // }
        return valid;
};
const existingAccount= async(req)=>{
    const hasher=require('../validation/hashing');
    const sql=require('./mysqlHelper');
    let test=0;
    const {email, password} =req.body;
    
    const output=await sql.query(`select email,password from logins` );
    console.log("after sql");
    
// 
      for(i=0;i<output.length;i++){
                if(test==0){
                    console.log(output[0][i].email);
                    if(email==output[0][i].email){
                        console.log("inside email")
                        
                        const qwe=output[0][i].password;
                        const hashPassword=await hasher.comparePassword(password,qwe);
                        // console.log(output[0][i].password)
                        if(hashPassword){
                            test=2;
                            console.log("welcome")
                        }else{
                            console.log("wrong hash")
                        }
                    }
                }
            }
        return test;
};

exports.newAccount = newAccount;
exports.existingAccount = existingAccount;
// ((emailValidation)=>{
//     // module.exports= async (req)=>{
//         emailValidation.newAccount=async (req)=>{
        
//         const email=req.body.email;
//         // const emailCheck=new RegExp(/^([a-zA-Z0-9\.\_])+@([a-zA-Z0-9])+.com$/);
// //         return true
//         let word="email already exists";
//         let word2="new user?sign-in to continue!"
//         count=0;
//         // authorization.checkExistingEmail=function (email){
//         //     for(i=0;i<users.length;i++){
//         //         if(count==0){
//         //             if(email==users[i][0]){
//         //                 count=1;
//         //             }
//         //         }
//         //     }
//         //     if(count==1){
//         //     return word;
//         //     }
//         //     else{
//         //         return word2;
//         //     }
//         // }   
//     // authorization.newAccount=function (email,password,phone){
//     const emailCheck=new RegExp(/^([a-zA-Z0-9\.\_])+@([a-zA-Z0-9])+.com$/);
//     const pass=new RegExp(/^[a-zA-Z0-9]{6,10}$/);
//     const phoneCheck=new RegExp(/^[0-9]{10}$/);
//     let valid=false;
//         if(emailCheck.test(email) ==true){
//         valid=true;
//         }

//         // console.log(boo);
//         if(pass.test(password)==true){
//         valid=true;
//         }
//         // console.log(boo2)
//         if(phoneCheck.test(phone)==true){
//         valid=true;
//         }
//         return valid;
//         // console.log(boo3)
//     // }
//     // authorization.validation=function(email,password){
//     //     test=0;
//     //     for(i=0;i<users.length;i++){
//     //         if(test==0){
//     //         // console.log("if")
//     //         // console.log(users[i][0])
//     //         // console.log(users[i][1])
//     //             if(email==users[i][0] && password==users[i][1]){
//     //                 console.log(users[i][0])
//     //                 console.log(users[i][1])
//     //                 test=1;
//     //             }
//     //         }
//     //     }
//     // console.log(test)
//     // if(test==1)
//     // console.log("correct email and pass.")
//     // else
//     // console.log("incorrect email or password")
//     // }
//     }
// })
// // function authorization(request){
// //     if(request.email=="amitmaharjan01@gmail.com"){
// //         console.log("success");
// //     }
// // }
