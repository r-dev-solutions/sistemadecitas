const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    phone: String,
    services: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service' }],
    schedule: [
        {
            day: String,
            start: String,
            end: String,
        }
    ],
    // Add more fields as needed
});

module.exports = mongoose.model('Employee', employeeSchema);