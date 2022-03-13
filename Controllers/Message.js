const Message = require('../Model/Message.js');

const createMessage = async(req, res) => {
    const {name, age, message} = req.body;
    try {
        const newMessage = await Message.create({name, age, message});
        res.status(201).json({message: 'message created successfully', data: newMessage})
    } catch(error) {
        res.status(400).json({message: error.message})
    }
}

const getAllMessages = async(req, res) => {
    const messages = await Message.find();
    try {
        res.status(200).json(messages)
    } catch {
        res.status(404).json({message: 'Not found'})
    }
}

const updateMessage = async(req, res) => {
    const {id} = req.params;
    const {message} = req.body;

    try {
        await Message.findByIdAndUpdate(id, {message})
        res.status(200).json({message: "update successful"})
    } catch (error) {
        res.status(401).json({message: error.message})
    }
}

module.exports = {
    createMessage,
    getAllMessages,
    updateMessage
}