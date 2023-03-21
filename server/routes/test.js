import express from "express";
import getTest from "../controllers/test.js"

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Express Test");
});

export default router;
