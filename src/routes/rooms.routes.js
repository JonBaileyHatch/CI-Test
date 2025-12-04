import express from 'express';
import { getAvailableRooms } from '../controllers/rooms.controller.js';

const router = express.Router();

router.get('/availability', getAvailableRooms);

export default router;
