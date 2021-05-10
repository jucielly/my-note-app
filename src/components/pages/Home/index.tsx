import React, { useState } from 'react';
import Navigation from '../../organisms/Navigation';
import Fab from '../../atoms/Fab'
import AddNoteModal from '../../organisms/AddNoteModal';
import addNote from '../../../services/addNote'
import { addNote as addNoteAction } from '../../../store/notes/actions'
import { useDispatch } from 'react-redux'
import Note from '../../molecules/Note';
import NoteList from '../../organisms/NoteList';


const Home: React.FC = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()


  const handleOpenModal = () => {
    setOpen(true)
  }

  const handleCloseModal = () => {
    setOpen(false)
  }

  const handleAddNote = (noteValue: string, title: string) => {
    const note = {
      noteValue,
      title
    }
    dispatch(addNoteAction(noteValue,title))
    addNote(note)
    handleCloseModal()
  }
  return (
    <>
      <Navigation />
      <NoteList />
      <Fab onClick={handleOpenModal} fixed><i className="fas fa-plus" ></i></Fab>
      <AddNoteModal onClose={handleCloseModal} open={open} onAddNote={handleAddNote} />
    </>
  );
}

export default Home;
