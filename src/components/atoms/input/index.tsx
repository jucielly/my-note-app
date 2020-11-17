import React from 'react';
import styled from 'styled-components'



const Input = styled.input`
 border: 2px solid #DED8D0;
 border-radius: 5px;
 padding: 20px;
width: 400px;
transition: .3s;

&::placeholder{
  color: #CDC3B7;
}

  & + input {
      margin: 30px;
  }

  &:focus{
    border: 2px solid #CC444B;
  }

`


export default Input; 