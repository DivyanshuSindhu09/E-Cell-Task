import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import startUpRouter from "./routes/startup.routes.js";

const app = express()
dotenv.config()
app.use(express.json())
app.use(cors({origin : "http://localhost:5173"}))

await connectDB()

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server Running At PORT ${PORT}`)
})

app.use('/api/v1/startups', startUpRouter)

app.get('/', (req, res) => {
    res.send('Server Is Running')
})