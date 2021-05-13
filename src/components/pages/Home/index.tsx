import React, { useState, useEffect} from 'react';
import Navigation from '../../organisms/Navigation';
import Fab from '../../atoms/Fab'
import AddNoteModal from '../../organisms/AddNoteModal';
import { addNote as addNoteAction,fetchAllNotes  } from '../../../store/notes/actions'
import { useDispatch } from 'react-redux'
import NoteList from '../../organisms/NoteList';
import { Note } from '../../../store/notes/types';



const Home: React.FC = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()


  const handleOpenModal = () => {
    setOpen(true)
  }

  const handleCloseModal = () => {
    setOpen(false)
  }

  const handleAddNote = (note: Note) => {
    dispatch(addNoteAction(note))
    handleCloseModal()
  }

  useEffect(()=>{
    dispatch(fetchAllNotes())
  },[])
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
