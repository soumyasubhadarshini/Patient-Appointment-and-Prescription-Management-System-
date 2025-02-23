const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Import User model
const User = require('./models/User');

// Enable CORS
app.use(cors());
app.use(express.json());

// MongoDB Connection URI
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/medicarerhub';

// Mock user data for seeding
const mockUsers = [
    {
        "createdAt": "2025-02-22T12:25:43.634Z",
        "name": "Janet Kreiger",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1143.jpg",
        "id": "1"
    },
    // ... Add all other user objects
];

// Function to seed initial data
async function seedDatabase() {
    try {
        // Check if users already exist
        const userCount = await User.countDocuments();
        if (userCount === 0) {
            await User.insertMany(mockUsers);
            console.log('Database seeded successfully');
        }
    } catch (error) {
        console.error('Error seeding database:', error);
    }
}

// API endpoints
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find().select('-__v');
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
});

// Get user by ID endpoint
app.get('/api/users/:id', async (req, res) => {
    try {
        const user = await User.findOne({ id: req.params.id }).select('-__v');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error: error.message });
    }
});

const startServer = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
        
        // Seed the database after connection
        await seedDatabase();
        
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        }).on('error', (e) => {
            if (e.code === 'EADDRINUSE') {
                console.log(`Port ${PORT} is busy, trying ${PORT + 1}`);
                app.listen(PORT + 1);
            } else {
                console.error(e);
            }
        });
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1);
    }
};

startServer();

// Root endpoint
app.get('/', (req, res) => {
    res.send('Hello from the server!');
});
