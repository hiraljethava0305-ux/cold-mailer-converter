import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import {
    deleteEmail,
  generateEmails,
  getEmailById,
  getMyEmails,
  sendMail,
  updateEmail,
} from "../controller/mail.controller.js";

const router = express.Router();

router.get("/generate", authMiddleware, generateEmails);
router.post("/send", authMiddleware, sendMail);

router.get("/:id", authMiddleware, getEmailById);
router.get("/id", authMiddleware, updateEmail);
router.get("/:id", authMiddleware, deleteEmail);

export default router;
