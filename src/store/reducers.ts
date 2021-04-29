import { combineReducers } from 'redux'
import { noteReducer } from './notes/reducer'



export const reducers = combineReducers({
    note: noteReducer
})