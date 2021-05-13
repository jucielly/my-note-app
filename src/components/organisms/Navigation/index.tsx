import React, {useState}from 'react';
import Navbar from '../../atoms/Navbar';
import NavigationOptions from '../../molecules/NavigationOptions';





const Navigation: React.FC =() => {
   const [search, setSearch] = useState('')

   const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearch(event.target.value)
}

const handleSearchNote = () =>{
    console.log(search)
}

    return (
        <>
            <Navbar>
                <NavigationOptions  search={search} onChange={handleSearchChange} onClick={handleSearchNote}/>
            </Navbar>
        </>
    );
}

export default Navigation;
