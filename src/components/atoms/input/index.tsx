import React from 'react';
import styled from 'styled-components'
import {darken} from 'polished' 



const Input = styled.input`
 border: 2px solid ${props => props.theme.colors.inputColor};
 border-radius: 25px;
 padding: 20px;
width: 400px;
transition: .3s;

&::placeholder{
  color: ${props => darken(0.2, props.theme.colors.inputColor)};
}

  & + input {
      margin: 30px;
  }

  &:focus{
    border: 2px solid ${props => darken(0.5, props.theme.colors.inputColor)};
  }

`


export default Input;