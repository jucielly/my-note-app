import React from 'react';
import { Nav } from './style'
import NoteLogo from '../../atoms/NoteLogo';
import Input from "../../atoms/input"
import HamburguerMenu from '../HamburgerMenu/HamburgerMenu';
import Button from '../../atoms/Button'

interface NavigationOptionsProps {
    search: string,
    onChange: (event: any) => void,
    onClick: () => void
}

const NavigationOptions: React.FC<NavigationOptionsProps> = ({ search, onChange, onClick }) => {

    return (
        <>
            <Nav>
                <HamburguerMenu />
                <div className="note-title"><NoteLogo /> My Note App</div>
                <div className="wrapper">
                    <Input placeholder="PESQUISAR" type="text" value={search} onChange={onChange} />
                    <Button onClick={onClick}><i className="fas fa-search"></i></Button>
                </div>
                <div><i className="fas fa-user-circle fa-4x"></i></div>

            </Nav>

        </>
    );
}

export default NavigationOptions;


