import express from "express";
import { registerUser,loginUser } from "../controller/auth.controller.js";

const router = express.Router()

router.post('/register',registerUser)
router.post('/loginUser',loginUser)

export default router