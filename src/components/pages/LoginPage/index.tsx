import React from 'react';
import styled from 'styled-components'
import LoginCard from '../../organisms/LoginCard';
import LogoCard from '../../organisms/LogoCard'




const Home: React.FC = () => {
  return (
    <Container>
      <LogoCard />
      <LoginCard />
    </Container>
  );
}

export default Home;

const Container = styled.div`
height: 100vh;
display: flex;
align-items: stretch;
background-color: #F47B7C;
`