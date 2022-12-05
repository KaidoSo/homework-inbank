import express from "express";
import { getAllUsers, getUserById } from "../controllers/inbankController.js";

const router = express.Router();

router.get("/get", getAllUsers);

router.get("/get/:id", getUserById);

export default router;
