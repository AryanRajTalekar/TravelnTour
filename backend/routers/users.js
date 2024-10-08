import express from "express"
import { updateTour } from "../controllers/tourController";
import { deleteUser, getAllUser, getSingleUser } from "../controllers/userController";
const router = express.Router()

import { verifyAdmin, verifyUser } from "../utils/verifyToken";

router.put('/:id',verifyUser,updateTour);
router.delete('/:id',verifyUser,deleteUser);
router.get('/:id',verifyUser,getSingleUser);
router.get('/',verifyAdmin,getAllUser);

export default router;