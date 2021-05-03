import { ADD_NOTE_ACTION } from './consts'
import {NewNoteAction,Note,NotesActionsTypes,NotesState} from './types'


const initialState: NotesState = []


export const noteReducer = (state = initialState, action: NotesActionsTypes) => {
    switch (action.type) {
        case ADD_NOTE_ACTION:
            return [
                ...state,
                action.payload
            ]
        default:
            return state


    }
}