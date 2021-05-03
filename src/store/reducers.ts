import { combineReducers } from 'redux'
import { noteReducer } from './notes/reducer'




export const reducers = combineReducers({
    notes: noteReducer
})

export type RootState = ReturnType<typeof reducers>  