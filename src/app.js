import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import bookingRoutes from './routes/booking.routes.js';
import roomsRoutes from './routes/rooms.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/bookings', bookingRoutes);
app.use('/api/rooms', roomsRoutes);

app.get('/', (req, res) => {
  res.json({ status: 'Evoko Booking API running' });
});

export default app;