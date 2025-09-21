// backend/server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contactRoutes');
const connectDB = require('./db'); // Import the connectDB function

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
connectDB(); // Call the imported function here

// API Routes
app.use('/api/contacts', contactRoutes);

app.get('/', (req, res) => {
    res.send('Contact Book API is running...');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));