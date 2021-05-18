import styled from 'styled-components'
import BaseCard from '../../atoms/BaseCard'


interface AnimateProps {
    open: boolean
}

const animateModal = (opacity = 1) => ({ open }: AnimateProps) => {
    const duration = '0.2s';
    return open ? `
     visibility: visible;
     opacity: ${opacity};
     transition: visibility 0s, opacity${duration} ease-in-out;`
        : `
     visibility: hidden;
     opacity: 0;
     transition: visibility 0s, opacity ${duration} ease-in-out;`
}

export const Modal = styled(BaseCard)`
padding: 10px;
flex-direction: column;
align-items: center;
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
width: 600px;
z-index: 900;
  height: 350px;
  ${animateModal(1)}

`

export const Container = styled.div`
 display: flex;

 .close-btn {
      position: absolute;
      top: 0;
      right: 15px;
      font-size: ${(props) => props.theme.fonts.fontSizes.medium};
      border: none;
      background-color: transparent;
      transition: 0.3s;
      &:hover,
      &:focus {
        outline: none;
        color: ${(props) => props.theme.colors.danger};
      }
    }
 
`

export const Overlay = styled.div`
position: fixed;
top: 0;
left:0;
width: 100%;
background-color: #333;
height: 100%;
z-index: 800;
 ${animateModal(0.5)}
`;
