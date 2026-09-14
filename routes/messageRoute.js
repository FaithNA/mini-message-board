import { Router } from "express";
import { getAllMessagesController, createNewMessageController } from "../controllers/messageController.js";

const messageRouter = Router()
messageRouter.get("/", getAllMessagesController)
messageRouter.get("/new", (req, res)=>{
    res.render("form")
})
messageRouter.post("/new", createNewMessageController)
export default messageRouter