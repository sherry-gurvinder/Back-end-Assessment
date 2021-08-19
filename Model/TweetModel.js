const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TweetSchema = new Schema({
    username:{type: String ,required: true},
    Tweet: {type: String },
    like: {type: Number },
});

//Export the model
module.exports = mongoose.model('Tweet', TweetSchema);