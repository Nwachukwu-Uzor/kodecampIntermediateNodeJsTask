const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        }, 
        age: {
            type: Number,
            required: true,
        },
        message: {
            type: String,
            required: true
        },
        createDate: {
            type: Date,
            default: Date.now
        }
    }
);

const messageModel = mongoose.model("Message", messageSchema);

module.exports = messageModel;