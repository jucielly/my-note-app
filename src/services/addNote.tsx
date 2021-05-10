import { Note } from "../store/notes/types"



const addNote = (note: Note) => {
    const stringifiedNotes = localStorage.getItem("note")
    let notes = JSON.parse(stringifiedNotes || '[]')
    if (!Array.isArray(notes)){
      notes = []
    }
      notes.push(note)
      localStorage.setItem("note", JSON.stringify(notes))
      
  
}

export default addNote