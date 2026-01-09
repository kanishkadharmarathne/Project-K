const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id:{
        type: Number,
        unique: true
    },
    codeName:{
        type: String,
        required: true,
        unique: true
    },password:{
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^\d{6}$/.test(v);
            },
            message: 'Password must contain exactly 6 numbers'
        }
    }
},{timestamps: true});

module.exports = mongoose.model('userModel', userSchema);