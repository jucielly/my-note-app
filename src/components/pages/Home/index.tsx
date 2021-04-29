import React, { useState } from 'react';
import NoteCard from '../../atoms/NoteCard';
import Navigation from '../../organisms/Navigation';
import Fab from '../../atoms/Fab'
import AddNoteModal from '../../organisms/AddNoteModal';
import addNote from '../../../services/addNote'
import { addNote as addNoteAction } from '../../../store/notes/actions'
import { useDispatch } from 'react-redux'


const Home: React.FC = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()


  const handleOpenModal = () => {
    setOpen(true)
  }

  const handleCloseModal = () => {
    setOpen(false)
  }

  const handleAddNote = (noteValue: string) => {
    const note = {
      noteValue,
    }
    dispatch(addNoteAction(noteValue))
    addNote(note)
    handleCloseModal()
  }
  return (
    <>
      <Navigation />
      <NoteCard />
      <Fab onClick={handleOpenModal}><i className="fas fa-plus"></i></Fab>
      <AddNoteModal onClose={handleCloseModal} open={open} onAddNote={handleAddNote} />
    </>
  );
}

export default Home;
