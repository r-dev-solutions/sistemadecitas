const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');
const { isAdmin } = require('../middleware/auth');

// Only admin can create an employee
router.post('/', isAdmin, async (req, res) => {
    // ... create employee logic ...
});

// Only admin can update an employee
router.put('/:id', isAdmin, async (req, res) => {
    // ... update employee logic ...
});

// Only admin can delete an employee
router.delete('/:id', isAdmin, async (req, res) => {
    // ... delete employee logic ...
});

// Anyone can view employees
router.get('/', async (req, res) => {
    // ... get employees logic ...
});

module.exports = router;