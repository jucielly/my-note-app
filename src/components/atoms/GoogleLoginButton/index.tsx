import Button from '../Button'
import styled from 'styled-components'
import { lighten } from 'polished'

const GoogleLoginButton = styled(Button)`
margin: 25px;
  background-color: ${props => props.theme.colors.terciary};
  padding: 15px;

  &:hover{
   background-color: ${props => lighten(0.2, props.theme.colors.terciary)}
  }
  color: ${props => props.theme.colors.fontColor};

.fa-google{
 margin-right: 10px;
 color: ${props => props.theme.colors.defaultWhite};
}
 

`

export default GoogleLoginButton