const express = require('express');

const { 
    createUser,
    getAllUsers,
    updateUser
} = require('../controllers/userController');

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', createUser);
router.patch('/:id', updateUser);   

module.exports = router;