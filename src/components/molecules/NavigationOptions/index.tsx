import React from 'react';
import { Nav } from './style'
import NoteLogo from '../../atoms/NoteLogo';
import HamburguerMenu from '../HamburgerMenu/HamburgerMenu';
import Search from '../Search';

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
                <Search search={search} onChange={onChange} onClick={onClick} />
                <div><i className="fas fa-user-circle fa-4x"></i></div>

            </Nav>

        </>
    );
}

export default NavigationOptions;


