import React from 'react';
import LoginForm from '../../molecules/LoginForm'
import styled from 'styled-components';


const LoginCard: React.FC = () => {
    return (
        <>
            <Card>
                <h2>Login</h2>
                <LoginForm />

                <span>Não tem Conta? <a href="#">registre-se</a></span>
            </Card>

        </>
    );
}

export default LoginCard;


const Card = styled.div`
display: flex;
flex-direction:column;
 align-items: center;
 width: 40%;
 background-color: ${props => props.theme.colors.defaultWhite};
 border-radius: 20px 0px 0px 20px;
 box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 20px;

 h2 {
    font-family: 'Caveat', cursive;
    color: ${props => props.theme.colors.primary};
     font-size: 3em;
     margin: 40px;
 
 }

 span{
     position: absolute;
     margin-top: 600px;
 }
`