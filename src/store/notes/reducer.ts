import { ADD_NOTE_ACTION, SET_NOTES_ACTION } from './consts'
import { Note, NotesActionsTypes, NotesState } from './types'


const initialState: NotesState = []


export const noteReducer = (state = initialState, action: NotesActionsTypes): NotesState => {
    switch (action.type) {
        case SET_NOTES_ACTION:
            return action.payload as Note[]

        default:
            return state


    }
}