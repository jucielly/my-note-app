import React from 'react';
import NoteCard from '../../atoms/NoteCard';
import Navigation from '../../organisms/Navigation';
import Fab from '../../atoms/Fab'






function Home() {
  return (
    <>
      <Navigation />
      <NoteCard />
      <Fab><i className="fas fa-plus"></i></Fab>
    </>
  );
}

export default Home;
