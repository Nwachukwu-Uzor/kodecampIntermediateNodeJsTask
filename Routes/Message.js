const express = require('express');
const MessageControllers = require('../Controllers/Message.js');

const MessageRouter = express.Router();

MessageRouter.get('/', MessageControllers.getAllMessages);
MessageRouter.get('/:id', MessageControllers.getSingleMessage);
MessageRouter.post('/', MessageControllers.createMessage);
MessageRouter.patch('/:id', MessageControllers.updateMessage);
MessageRouter.delete('/:id', MessageControllers.deleteMessage);

module.exports = MessageRouter;
