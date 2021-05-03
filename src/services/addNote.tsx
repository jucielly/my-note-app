


const addNote = (note: any) => {
    const stringifiedNotes = localStorage.getItem("note")
    let notes = JSON.parse(stringifiedNotes || '[]')
    if (!Array.isArray(notes)){
      notes = []
    }
      notes.push(note)
      localStorage.setItem("note", JSON.stringify(notes))
      
  
}

export default addNote