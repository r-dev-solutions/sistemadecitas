const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// GET all appointments
router.get('/', async (req, res) => {
    const appointments = await Appointment.find();
    res.json(appointments);
});

// POST create a new appointment
router.post('/', async (req, res) => {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json(appointment);
});

// PUT update an appointment by ID
router.put('/:id', async (req, res) => {
    const updated = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
});

// DELETE an appointment by ID
router.delete('/:id', async (req, res) => {
    await Appointment.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

module.exports = router;