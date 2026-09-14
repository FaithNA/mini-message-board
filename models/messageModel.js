const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

export function getAllMessages(){
    return messages
}

export function createNewMessage(text, user, added){
  let id = messages.length + 1
  const newMessage = {id, text, user, added}
  messages.push(newMessage)
}

export function getMessage(id){
    for(let i=0; i<messages.length; i++){
      if(messages[i].id === id){
        return messages[i]
        
      }
    }
}