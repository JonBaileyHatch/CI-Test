import express from 'express';
import { createBooking, deleteBooking } from '../controllers/booking.controller.js';

const router = express.Router();

router.post('/', createBooking);
router.delete('/:id', deleteBooking);

export default router;
