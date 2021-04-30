import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/reducers'
import Note from '../../molecules/Note'



const NoteList: React.FC = () => {
    const notes = useSelector((state: RootState) => state.notes)
    return (
        <Container>
            {notes.map((note, key) => <Note noteValue={note.note} key={key} />)}
        </Container>


    )
}


export default NoteList

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: stretch;
`