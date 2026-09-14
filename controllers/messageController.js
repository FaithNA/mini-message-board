import { getAllMessages, createNewMessage } from "../models/messageModel.js";

export function getAllMessagesController(req, res){
    let messages = getAllMessages()
    res.render("index", { messages, title: "Mini Messageboard" })
}

export function createNewMessageController(req, res){
    let user = req.body.user
    let text = req.body.textMessage
    let added = new Date()
    let newMessage = createNewMessage(text, user, added)
    res.redirect("/")
}