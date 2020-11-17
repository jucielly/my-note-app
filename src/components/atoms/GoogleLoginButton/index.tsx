import Button from '../Button'
import styled from 'styled-components'
import { lighten } from 'polished'

const GoogleLoginButton = styled(Button)`
margin: 25px;
  background-color: #918F92;
  padding: 15px;

  &:hover{
   background-color: ${lighten(0.2, '#918F92')};
  }
  color: #070610;

.fa-google{
 margin-right: 10px;
 color: #fff;
}
 

`

export default GoogleLoginButton