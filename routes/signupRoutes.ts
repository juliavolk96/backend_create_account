import express from "express";
import { createAccount } from "../controllers/signupController";

const router = express.Router();

// Route for processing the account creation request
router.post('/signup', createAccount);

export default router;