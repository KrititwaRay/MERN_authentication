import express from "express";
import "dotenv/config";
import connectDb from "./config/db.js";


await connectDb();

const app = express();

//middlewares
app.use(express.json());

//import routes
import userRouter from "./routes/user.js";


// using routes
app.use('/api/v1', userRouter)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})