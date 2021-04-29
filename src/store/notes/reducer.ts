import { ADD_NOTE_ACTION } from './consts'

interface Action {
    type: string;
    payload: object;
}

const initialState: [] = []


export const noteReducer = (state = initialState, action: Action) => {
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