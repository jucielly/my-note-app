import { ADD_NOTE_ACTION } from './consts'

export const addNote = (note: string) => ({
    type: ADD_NOTE_ACTION,
    payload: { note }
})