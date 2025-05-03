const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' },
    employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
    date: Date,
    status: { type: String, enum: ['booked', 'cancelled', 'completed'], default: 'booked' },
    // Add more fields as needed
});

module.exports = mongoose.model('Appointment', appointmentSchema);