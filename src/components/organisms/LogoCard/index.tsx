import React from 'react';
import Logo from '../../molecules/Logo'
import styled from 'styled-components';

const LogoCard: React.FC = () => {
    return (
        <>
            <Container>
                <h1>My Note App</h1>
                <Logo />
            </Container>

        </>
    );
}

export default LogoCard;


const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
 width:60%;

 h1{
     
 }
`