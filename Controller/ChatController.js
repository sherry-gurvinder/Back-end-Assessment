const User = require('../Model/UserModel')
const Chat = require('../Model/UserModel')
module.exports={
   
    SendMessage:function(req,res)
    {
        User.find({'username':req.body.username},(err,result)=>{

            if(result.length==0)
            {
                Chat.insertMany(req.body, function(err, result){
                    if (err) throw error;
                    console.log(result);
                    res.json('Message Send')
                })
            }
            else{
               
                res.json({'error':"receiver does'not exist"});
            }


        })
    }
}