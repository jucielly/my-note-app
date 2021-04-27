import React, { useState } from 'react';
import NoteCard from '../../atoms/NoteCard';
import Navigation from '../../organisms/Navigation';
import Fab from '../../atoms/Fab'
import BaseModal from '../../molecules/BaseModal';






function Home() {
  const [open, setOpen] = useState(false)

  const handleOpenModal = () => {
    setOpen(true)
  }

  const handleCloseModal = () =>{
    setOpen(false)
  }
  return (
    <>
      <Navigation />
      <NoteCard />
      <Fab onClick={handleOpenModal}><i className="fas fa-plus"></i></Fab>
      <BaseModal onClose={handleCloseModal} open={open} />
    </>
  );
}

export default Home;
