var mongoose = require('mongoose');

var chatSchema = new mongoose.Schema(
    {
      
        sender:{type:String, required: true },
        receiver:{type:String, required: true },
        msg:{type:String, required: true },
        created: {type: Date, default: Date.now}
    }
);
module.exports = mongoose.model('chat',chatSchema);