import express from 'express';

const router = express.Router();

export const getTest = (req, res) => {
  res.send("Express Test");
};

export default router