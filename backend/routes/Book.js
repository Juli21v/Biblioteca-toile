import express from "express";
import book from "../controllers/Book.js";

const router = express.Router();

router.post("/registerBook", book.registerBook);

export default router;