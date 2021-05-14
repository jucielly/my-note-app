import { LocalStorageService } from './localStorage'
import { Note } from '../store/notes/types'
import { StringService } from './string'
import { isJSDocReturnTag } from 'typescript'

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

    static searchNote(search: string) {
        const notes = this.getAllNotes()
         return  notes.filter(note => {
            return note.title.toUpperCase().includes(search.toUpperCase())
        })
    }
}