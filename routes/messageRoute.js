import { Router } from "express";
import { getAllMessagesController, createNewMessageController, getMessageController } from "../controllers/messageController.js";
import { body } from "express-validator";

const messageRouter = Router()
messageRouter.get("/", getAllMessagesController)
messageRouter.get("/new", (req, res)=>{
    res.render("form", { 
        title: "Mini Messageboard", 
        user: "",
        textMessage: "",
        errors: [] 
})
})
messageRouter.post("/new", 
    body("user").trim().notEmpty().withMessage("Must not be empty").bail().isLength({min: 3}).withMessage("Must be at least 3 characters"), 
    body("textMessage").trim().notEmpty().withMessage("Must not be empty"), 
    createNewMessageController)
messageRouter.get("/open/:id", getMessageController)
export default messageRouter