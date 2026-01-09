const express = require('express');
const { 
    createMessage,
    getAllMessages,
    getMessage
    } = require('../controllers/messageController');

const router = express.Router();

router.get('/', getAllMessages);
router.get('/:id', getMessage);
router.post('/',createMessage);

module.exports = router;