import React from 'react';
import LoginForm from '../../molecules/LoginForm'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import NoteAppTemplate from '../../templates/NoteAppTemplate'


const LoginCard: React.FC = () => {
    return (

        <NoteAppTemplate title="Registrar">
            <LoginForm btnName="Registrar" />
            <span>já tem uma conta? <Link to="/login">login</Link></span>
        </NoteAppTemplate>



    );
}

export default LoginCard;


