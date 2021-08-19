const Tweet = require('../Model/TweetModel');
module.exports={
    Tweet_create : function (req, res) {
    var tweet = new Tweet(
        {
            name: req.body.name,
            price: req.body.price
        }
    );
    Tweet.insertMany(req.body,function(err,result)
    {
        if (err) {
            return next(err);
        }
        res.json('Tweet Created successfully')
    });
   
    },

Tweet_update : function (req, res) {

    Tweet.updateMany(req.params.id, {$set: req.body},
        function (err, tweet) {
            if (err) return next(err);
            res.json('Tweet is updated.');
        });


    },
Tweet_delete : function (req, res) {
    Tweet.remove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted Tweet'+req.params.id+'succesfully')
    })

}
}