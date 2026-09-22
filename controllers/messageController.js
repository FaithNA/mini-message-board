import { matchedData, validationResult } from "express-validator";
import { getAllMessages, createNewMessage, getMessage } from "../models/messageModel.js";

export function getAllMessagesController(req, res){
    let messages = getAllMessages()
    res.render("index", { messages, title: "Mini Messageboard" })
}

export function createNewMessageController(req, res){
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
    let newMessage = createNewMessage(textMessage, user, added)
    res.redirect("/")
}

export function getMessageController(req, res){
    let id = Number(req.params.id)
    let message = getMessage(id)
    if(!message){
        return res.status(404).render("errorPage")
    }
    res.render("open", { message, title: "Mini Messageboard" })
    
}