import styled from 'styled-components'
import Button from '../../atoms/Button'
import { darken } from 'polished'



export const Nav = styled.nav`
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


