import express from "express";
import "dotenv/config";
import connectDb from "./config/db.js";


const app = express();
await connectDb();


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})