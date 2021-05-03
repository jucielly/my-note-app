import Button from '../Button'
import styled, { css } from 'styled-components';

interface FabProps {
    fixed: boolean
}

const Fab = styled(Button)<FabProps>`
    width: 65px;
    height: 65px;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 20px;
    ${(props) => props.fixed ? css`
    position: fixed;
    bottom: 65px;
    right: 65px;
    
    `: ''}
   
`


export default Fab