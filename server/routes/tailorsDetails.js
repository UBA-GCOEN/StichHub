import express from "express";
import {
  addTailor,
  getTailorList,
  updateTailorProfile,
} from "../controllers/tailorDetails.js";

const router = express.Router();
import authTailor from "../middlewares/authTailor.js";

router.get("/list", getTailorList);
router.post("/list", authTailor, addTailor);
router.put("/profileupdate", authTailor, updateTailorProfile);

export default router;
