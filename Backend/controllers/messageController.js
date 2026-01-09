const Message = require('../models/messageModel');
const mongoose = require('mongoose');

const getAllMessages = async (req, res) => {
    const messages = await Message.find({}).sort({ createdAt: -1 });
    res.status(200).json(messages);
}

const getMessage = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' });
    }

    const message = await Message.findById(id);

    if (!message) {
        return res.status(404).json({ error: 'No such message' });
    }

    res.status(200).json(message);
}

const createMessage = async (req, res) => {
    const { senderCode, reciverCode, body } = req.body;
    try {
        const message = await Message.create({ senderCode, reciverCode, body });
        res.status(201).json(message);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getAllMessages,
    getMessage,
    createMessage
};