const express = require('express');
const router = express.Router();
const Service = require('../models/Service');
const { isAdmin } = require('../middleware/auth');

// Only admin can create a service
router.post('/', isAdmin, async (req, res) => {
    // ... create service logic ...
});

// Only admin can update a service
router.put('/:id', isAdmin, async (req, res) => {
    // ... update service logic ...
});

// Only admin can delete a service
router.delete('/:id', isAdmin, async (req, res) => {
    // ... delete service logic ...
});

// Anyone can view services
router.get('/', async (req, res) => {
    // ... get services logic ...
});

module.exports = router;