import React, { useState } from 'react';
import NoteCard from '../../atoms/NoteCard';
import Navigation from '../../organisms/Navigation';
import Fab from '../../atoms/Fab'
import AddNoteModal from '../../organisms/AddNoteModal';
import addNote from '../../../services/addNote'


const Home: React.FC = () => {
  const [open, setOpen] = useState(false)


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
