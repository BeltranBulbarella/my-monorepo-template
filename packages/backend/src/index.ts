import { PrismaClient } from '@prisma/client';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 4000;

app.use(cors())

// Middleware to parse JSON
app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
    res.send('Hello from Backend!');
});

// Health check route
app.get('/health', (req, res) => {
    res.send('Server is healthy');
});

// Create a user
app.post('/user', async (req, res) => {
    const { email, password, name } = req.body;

    try {
        const user = await prisma.user.create({
            data: {
                email,
                password,
                name,
            },
        });
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating user' });
    }
});

// Create a TODO
app.post('/todo', async (req, res) => {
    const { title, content, userId } = req.body;

    try {
        const todo = await prisma.tODO.create({
            data: {
                title,
                content,
                userId,
            },
        });
        res.status(201).json(todo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating TODO' });
    }
});

// Get TODOs for a specific user
app.get('/todo/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const todos = await prisma.tODO.findMany({
            where: {
                userId: parseInt(userId as string, 10), // Parse userId to an integer
            },
        });
        res.status(200).json(todos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching TODOs' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
