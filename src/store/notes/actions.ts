import { SET_NOTES_ACTION } from './consts'
import { NoteService } from '../../services/note'
import { Note } from './types'

export const addNote = (note: Note) => {
    NoteService.addNote(note)
    return  fetchAllNotes()
}


export const fetchAllNotes = () => {
    const notes = NoteService.getAllNotes()
    return ({
        type: SET_NOTES_ACTION,
        payload: notes
    })

}