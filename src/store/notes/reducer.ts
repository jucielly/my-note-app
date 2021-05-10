import { ADD_NOTE_ACTION, INIT_ACTION } from './consts'
import { NewNoteAction, Note, NotesActionsTypes, NotesState } from './types'


const initialState: NotesState = []


export const noteReducer = (state = initialState, action: NotesActionsTypes):NotesState => {
    switch (action.type) {
        case ADD_NOTE_ACTION:
            return [
                ...state,
                action.payload
            ]
        case INIT_ACTION:
            const notesString = localStorage.getItem("note")
             const notes = JSON.parse(notesString || '[]')
            return Array.isArray(notes) ? notes : []
        default:
            return state


    }
}