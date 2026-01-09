const User = require('../models/userModel');
const mongoose = require('mongoose');

const getAllUsers = async (req, res) => {
    const users = await User.find({}).sort({ createdAt: -1 });
    res.status(200).json(users);
}

const createUser = async (req, res) => {
    const { id, codeName, password } = req.body;
    try {
        const user = await User.create({ id, codeName, password });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such user' });
    }

    const user = await User.findOneAndUpdate({ _id: id }, {
        ...req.body
    });

    if(!user) {
        return res.status(404).json({ error: 'No such user' });
    }
    res.status(200).json(user);
}

module.exports = {
    getAllUsers,
    createUser,
    updateUser
};