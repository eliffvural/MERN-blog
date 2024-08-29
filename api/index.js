import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';

dotenv.config();

console.log("MongoDB URI:", process.env.MONGO);

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log("Connected to MongoDB");
})
.catch(err => {
    console.error("MongoDB connection error:", err);
});

const app = express();

app.use(express.json());

app.listen(3000, ()=>{
    console.log('server is running on port 3000');
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);