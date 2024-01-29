const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
        min: 6,
        max: 255,
        trim: true
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255,
        trim: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    payment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Payment'
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    },

})

const User = mongoose.model('User', userSchema);

export default User;