const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

export function getAllMessages(){
    return messages
}

export function createNewMessage(text, user, added){
    const newMessage = {text, user, added}
    messages.push(newMessage)
}