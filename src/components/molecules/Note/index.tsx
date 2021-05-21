import React from 'react';
import { NoteCard } from './style'
interface NoteProps {
    noteValue: string
    title: string
}

const Note: React.FC<NoteProps> = ({ noteValue, title }) => {
    return (
        <NoteCard> 
            <i className="fas fa-trash-alt"></i>  
            <h4 className="title">{title}</h4>
            <p>{noteValue}</p>

        </NoteCard>
    )
}

export default Note


