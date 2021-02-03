const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChatSchema = new Schema({

    chatId:{
        type:String
    },
    mesDetails:{
        type:Array,
    }
})

module.exports =  mongoose.model('Chats', ChatSchema);