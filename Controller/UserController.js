const { Console } = require('console');

const User = require('../Model/UserModel')
module.exports={
   
    CreateAccount:function(req,res){
        console.log("I am inside  CreateAccount");
        
        console.log(req.body);

        User.find({'username':req.body.username},(err,result)=>{

            if(result.length==0)
            {
                User.insertMany(req.body, function(err, result){
                    if (err) throw error;
                    console.log(result);
                    res.json('User Created')
                })
            }
            else{
                console.log("USername and email exist");
                console.log("invalid")
                res.json({'error':"Already Exist Username"})
            }


        })

    },
    Login:function(req,res){
        console.log("I am inside get  by Login");

        console.log(req.body.username);
        console.log(req.body.password);
        
        User.find({$and:[{'username':req.body.username},{'password':req.body.password}]},function(err,result)
        {
            if(result.length!=0)
            {
                
                
                req.session.isAuth= true;
                console.log("login");
                res.json("Login Success");
               
                
              
                
             
            }
            else{
              
                res.json({'error':"Invalid Username or Password"})
            }
        })
    }
}

