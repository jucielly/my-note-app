import styled from 'styled-components' 
import {darken} from 'polished'

const Button = styled.button`
font-family: 'Roboto', sans-serif;
border: none;
background-color: #CC444B;
color: #fff;
border-radius: 5px;
width: 250px;
padding: 15px;
transition: .3s;
font-size: 1em;

&:hover {
    background-color: ${darken(0.1,'#CC444B')};
}

&:focus {
    outline: none
}
`


export default Button;


