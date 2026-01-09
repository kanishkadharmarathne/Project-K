const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    senderCode:{
        type: String,
        required: true
    },reciverCode:{
        type: String,
        required: true
    },body:{
        type: String,
        required: true
    }
    
},{timestamps: true});

module.exports = mongoose.model('messageModel', messageSchema);