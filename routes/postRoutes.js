import express from "express";
import multer from "multer";
import { createPost, getPosts } from "../controllers/postController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.route("/").get(protect, getPosts).post(protect, upload.single("image"), createPost);

export default router;