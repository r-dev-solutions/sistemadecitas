const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middleware/auth');

// Example: Only admin can access system settings
router.get('/settings', isAdmin, async (req, res) => {
    // ... get system settings logic ...
});

router.put('/settings', isAdmin, async (req, res) => {
    // ... update system settings logic ...
});

// Example: Only admin can access reports/statistics
router.get('/reports', isAdmin, async (req, res) => {
    // ... get reports/statistics logic ...
});

module.exports = router;