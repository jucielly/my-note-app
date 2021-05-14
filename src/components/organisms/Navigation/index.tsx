import React, { useState, useEffect } from 'react';
import Navbar from '../../atoms/Navbar';
import NavigationOptions from '../../molecules/NavigationOptions';
import { useDispatch } from 'react-redux'
import { searchAllNotes } from '../../../store/notes/actions'




const Navigation: React.FC = () => {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()

    const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setSearch(event.target.value)
    }
    const handleSearchNote = () => {
        dispatch(searchAllNotes(search))
    }

    useEffect(() => {
        setSearch('')
    }, [])

    return (
        <>
            <Navbar>
                <NavigationOptions search={search} onChange={handleSearchChange} onClick={handleSearchNote} />
            </Navbar>
        </>
    );
}

export default Navigation;
