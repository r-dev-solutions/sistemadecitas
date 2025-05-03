const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors'); // Add this line

const app = express();
app.use(cors()); // Add this line to allow all origins
app.use(express.json());

// ... import routes here ...
const appointmentRoutes = require('./routes/appointments');
const userRoutes = require('./routes/users');
const serviceRoutes = require('./routes/services');
const employeeRoutes = require('./routes/employees');
const adminRoutes = require('./routes/admin');
app.use('/api/appointments', appointmentRoutes);
app.use('/api/users', userRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/admin', adminRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// ... define routes here ...

app.get('/', (req, res) => {
    res.send('Sistema de Citas Backend');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});