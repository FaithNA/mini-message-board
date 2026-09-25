import pool from "../db/pool.js";


export async function getAllMessages(){
  const result = await pool.query("SELECT * FROM messages");
  return result.rows
}

export async function createNewMessage(text, user, added){
  await pool.query("INSERT INTO messages (text, username, added)VALUES($1, $2, $3)", [text, user, added])

}

export async function getMessage(id){
    const message = await pool.query("SELECT * FROM messages WHERE id = $1", [id])
    return message.rows[0]
}