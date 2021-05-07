import React, { useRef } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/reducers'
import Note from '../../molecules/Note'
import Masonry from 'react-masonry-css';


const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
};


const NoteList: React.FC = () => {

    const notes = useSelector((state: RootState) => state.notes)
    return (
        <Container>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">

                {notes.map((note, key) => <Note noteValue={note.note} key={key} />)}

            </Masonry>
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