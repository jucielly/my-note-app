import React from 'react';
import styled from 'styled-components'



const Input = styled.input`
 border: 1px solid #918F92;
 border-radius: 5px;
 padding: 8px;
width: 40%;

  & + input {
      margin: 15px;
  }

`


export default Input;