import React from 'react';
import styled from 'styled-components';
import LoginImage from '../../../assets-noteApp/loginImg.png'

const Logo: React.FC = () => <LogoImg src={LoginImage} />

export default Logo;


const LogoImg = styled.img`
    width: 500px;
  
`
