import { Router } from "express";
import { getAllMessagesController, createNewMessageController, getMessageController } from "../controllers/messageController.js";

const messageRouter = Router()
messageRouter.get("/", getAllMessagesController)
messageRouter.get("/new", (req, res)=>{
    res.render("form", { title: "Mini Messageboard" })
})
messageRouter.post("/new", createNewMessageController)
messageRouter.get("/open/:id", getMessageController)
export default messageRouter