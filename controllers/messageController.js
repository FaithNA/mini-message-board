import { matchedData, validationResult } from "express-validator";
import { getAllMessages, createNewMessage, getMessage } from "../models/messageModel.js";

export async function getAllMessagesController(req, res){
    let messages = await getAllMessages()
    res.render("index", { messages, title: "Mini Messageboard" })
}

export async function createNewMessageController(req, res){
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).render("form", {
            errors: errors.array(),
            ...req.body,
            title: "Mini Messageboard"
        })
    }
    const {user, textMessage} = matchedData(req)
    let added = new Date()
    await createNewMessage(textMessage, user, added)
    res.redirect("/")
}

export async function getMessageController(req, res){
    let id = Number(req.params.id)
    let message = await getMessage(id)
    if(!message){
        return res.status(404).render("errorPage", {
            title: "Mini Messageboard"
        })
    }
    res.render("open", { message, title: "Mini Messageboard" })
    
}