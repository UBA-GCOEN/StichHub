import express from 'express';

const router = express.Router();

export const getTest = (req, res) => {
  res.send("Server Connect");
};

export default router