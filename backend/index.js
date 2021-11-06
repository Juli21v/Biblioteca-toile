import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./db/db.js";
import book from "./routes/Book.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/book", book);

app.listen(process.env.PORT, () =>
console.log("Backend server running on port:" + process.env.PORT)
);

db.dbConnection();