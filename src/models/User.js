const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    phone: String,
    role: { type: String, enum: ['client', 'employee', 'admin'], default: 'client' },
    // Add more fields as needed
});

module.exports = mongoose.model('User', userSchema);