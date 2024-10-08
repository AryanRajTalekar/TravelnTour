
import express from 'express';
import { createReview } from '../controllers/reviewControllers';
import { verifyUser } from '../utils/verifyToken';
const router = express.Router();

router.post("/:tourId",verifyUser,createReview);

export default router;