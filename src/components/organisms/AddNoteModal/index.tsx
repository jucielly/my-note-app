import React, {useState, useEffect}from 'react'
import styled from 'styled-components'
import Button from '../../atoms/Button'
import BaseModal from '../../molecules/BaseModal'
import { darken } from 'polished'


interface AddNoteProps {
    open: boolean;
    onClose: () => void;
    onAddNote: (note:string) => void;
   
}




const AddNoteModal: React.FC<AddNoteProps> = ({ open, onClose, onAddNote }) => {
    const [noteValue, setNoteValue] = useState('')

    const handleOnNoteChange:React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
      setNoteValue(event.target.value)
    }

    const handleAddNote = () => {
        onAddNote(noteValue)
    }

    useEffect(()=>{
        if(open){
            setNoteValue('')
        }
    },[open])
    return (
        <BaseModal open={open} onClose={onClose}>
            <Textarea placeholder="Nota..." onChange={handleOnNoteChange} value={noteValue}></Textarea>
            <AddNoteButton onClick={handleAddNote}>adicionar nota</AddNoteButton>

        </BaseModal>)
}


export default AddNoteModal

const Textarea = styled.textarea`
 width: 580px;
 height: 150px;
margin: 15px;
border: none;
font-size: 1.5em;
resize: none;
 
&:focus {
    outline: none
}

`
const AddNoteButton = styled(Button)`
 background-color: ${props => props.theme.colors.success};

 &:hover {
    background-color: ${props => darken(0.2, props.theme.colors.success)};
}
`