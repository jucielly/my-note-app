import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/reducers'
import Note from '../../molecules/Note'



const NoteList: React.FC = () => {
    const notes = useSelector((state: RootState) => state.notes)
    return (
        <div>
            {notes.map((note,key) => <Note noteValue={note.note} key={key} /> )}
        </div>
    )
}


export default NoteList