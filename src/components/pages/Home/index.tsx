import React from 'react';
import styled from 'styled-components'
import LoginCard from '../../organisms/LoginCard';




const Home: React.FC = () => {
  return (
    <Container>
      <LoginCard />
    </Container>
  );
}

export default Home;

const Container = styled.div`
height: 100vh;
display: flex;
align-items: stretch;
`