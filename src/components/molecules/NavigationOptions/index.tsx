import React from 'react';
import { Nav } from './style'
import NoteLogo from '../../atoms/NoteLogo';
import Input from "../../atoms/input"
import HamburguerMenu from '../../atoms/HamburgerMenu/HamburgerMenu';



const NavigationOptions: React.FC = () => {
    return (
        <>
            <Nav>
                <HamburguerMenu />
                <div className="note-title"><NoteLogo /> My Note App</div>
                <div className="wrapper"><Input placeholder="PESQUISAR" type="text" /><i className="fas fa-search"></i></div>
                <div><i className="fas fa-user-circle fa-4x"></i></div>

            </Nav>

        </>
    );
}

export default NavigationOptions;


