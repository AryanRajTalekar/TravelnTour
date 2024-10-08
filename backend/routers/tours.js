
import express from "express";
import { createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBysearch, getTourCount, updateTour } from "../controllers/tourController";
import { verifyAdmin } from "../utils/verifyToken";

const router = express.Router();

router.post('/',verifyAdmin,createTour);
router.put('/:id',verifyAdmin,updateTour);
router.delete('/:id',verifyAdmin,deleteTour);
router.get('/:id',getSingleTour);
router.get('/',getAllTour);

router.get("/search/getTourBySearch",getTourBysearch);
router.get("/search/getFeaturedTours",getFeaturedTour);
router.get("/search/getTourCount",getTourCount);


export default router;