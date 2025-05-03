const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: String,
    duration: Number, // in minutes
    price: Number,
    provider: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
    // Add more fields as needed
});

module.exports = mongoose.model('Service', serviceSchema);