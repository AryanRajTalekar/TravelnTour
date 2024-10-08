
import express from 'express';

import { verifyAdmin, verifyUser } from '../utils/verifyToken';
import { createBooking, getAllBooking, getbBooking } from '../controllers/bookingController';
const router = express.Router();

router.post("/",verifyUser,createBooking);
router.get("/:id",verifyUser,getbBooking);
router.get("/",verifyAdmin,getAllBooking);

export default router;