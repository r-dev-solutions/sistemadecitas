const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Register a new user
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;

        // Check if any users exist
        const userCount = await User.countDocuments();

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Assign role: first user is admin, others are employees by default
        const role = userCount === 0 ? 'admin' : 'employee';

        const user = new User({
            name,
            email,
            password: hashedPassword,
            phone,
            role
        });

        await user.save();
        res.status(201).json({ message: 'User registered successfully', user: { id: user._id, role: user.role } });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;