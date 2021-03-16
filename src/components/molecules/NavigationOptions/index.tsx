import React from 'react';
import Input from "../../atoms/input"
import Button from '../../atoms/Button'
import styled from 'styled-components'
import NoteLogo from '../../atoms/NoteLogo';


const NavigationOptions: React.FC = () => {
    return (
        <>
            <Nav>

                <div><i className="fas fa-bars fa-3x"></i></div>
                <div className="note-title"><NoteLogo /> My Note App</div>
                <div><Input placeholder="PESQUISAR" type="password" /><i className="fas fa-search"></i></div>
                <div><i className="fas fa-user-circle fa-4x"></i></div>

            </Nav>

        </>
    );
}

export default NavigationOptions;


const Nav = styled.nav`
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;


.note-title {
    font-family: 'Caveat', cursive;
    color: ${props => props.theme.colors.primary};
     font-size: 3em;
     text-align: center;
}

.fa-user-circle {
    color: ${props => props.theme.colors.terciary};
}

.fa-bars {
    color: ${props => props.theme.colors.terciary};
}
`