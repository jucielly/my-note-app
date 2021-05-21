import { LocalStorageService } from './localStorage'
import { Note } from '../store/notes/types'
import { StringService } from './string'


const NOTES_KEY = 'note'

export class NoteService {

    static addNote(note: Note) {
        let notes = LocalStorageService.readValue(NOTES_KEY) as Note[]
        if (!Array.isArray(notes)) {
            notes = []
        }
        const id = StringService.getRandomString()
        notes.push({ ...note, id })
        LocalStorageService.setValue(NOTES_KEY, notes)
    }

    static getAllNotes() {
        const notes = LocalStorageService.readValue(NOTES_KEY) as Note[]
        console.log('note', notes)
        if (!Array.isArray(notes)) {
            return []
        }
        return notes
    }

    static deleteNote(noteId: string) {
        const notes = this.getAllNotes();
        const noteIndex = notes.findIndex((note) => note.id === noteId)
        notes.splice(noteIndex, 1)
        LocalStorageService.setValue(NOTES_KEY, notes)
    }

    static updateNote(note: Note) {
        const notes = this.getAllNotes();
        const noteIndex = notes.findIndex((currentNote) => note.id === currentNote.id)
        notes[noteIndex] = note
        LocalStorageService.setValue(NOTES_KEY, notes)
    }


    static searchNote(search: string) {
        const notes = this.getAllNotes()
        return notes.filter(note => {
            return note.title.toUpperCase().includes(search.toUpperCase()) || note.content.toUpperCase().includes(search.toUpperCase())
        })
    }
}