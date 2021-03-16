import styled from 'styled-components'
//import { darken } from 'polished'

const Navbar = styled.div`
 display: flex;
 align-items: center;
 width: 100%;
 padding: 1em;
 background-color:${props => props.theme.colors.defaultWhite};
 border-radius: 0px 0px 20px 20px;
 box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 20px;
`

export default Navbar