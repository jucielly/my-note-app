import React from 'react'
import styled from 'styled-components'
import Input from "../../atoms/input"
import Button from '../../atoms/Button'


interface SearchProps {
    search: string;
    onChange: (event: any) => void
    onClick: () => void

}


const Search: React.FC<SearchProps> = ({ search, onChange, onClick }) => {
    return (
        <Wrapper>
            <Input placeholder="PESQUISAR" type="text" value={search} onChange={onChange} className='search-input' />
            <Button onClick={onClick} className="search-btn"><i className="fas fa-search"></i></Button>
        </Wrapper>


    )
}


export default Search;

const Wrapper = styled.div`
position: relative;
width: 40%;

.search-input {
    width: 100%;
    padding-right: 70px;
}

.search-btn {
    box-shadow: none;
    height: 100%;
    border-radius: 0 25px 25px 0;
    position:absolute;
    top:0px;
    right: 0px;
    width: 70px;
    
}

`