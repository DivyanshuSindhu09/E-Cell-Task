import express from "express"
import { addStartUp, discoverStartups, getAllStartups } from "../controllers/startup.controller.js"
import { upload } from "../middlewares/multer.middleware.js"

const startUpRouter = express.Router()

startUpRouter.post("/add", upload.single("logo") ,addStartUp)
startUpRouter.get("/allstartups", getAllStartups)
startUpRouter.post("/search", discoverStartups)

export default startUpRouter