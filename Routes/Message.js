const express = require('express');
const MessageControllers = require('../Controllers/Message.js');

const MessageRouter = express.Router();

MessageRouter.get('/', MessageControllers.getAllMessages);
MessageRouter.post('/', MessageControllers.createMessage);
MessageRouter.patch('/:id', MessageControllers.updateMessage);


module.exports = MessageRouter;
