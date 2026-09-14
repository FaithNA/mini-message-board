import express from "express"
import messageRouter from "./routes/messageRoute.js"

const app = express()
app.set("view engine", "ejs")
app.use(express.urlencoded({extended: true}))
app.use("/", messageRouter)
app.listen(3000)