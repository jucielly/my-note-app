import styled from 'styled-components'
import BaseCard from '../../atoms/BaseCard';



export const NoteCard = styled(BaseCard)`
background-color: ${props => props.theme.cardColors.orangeYellow};
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 20px;
  border-radius: 5px;
  display: flex;
 flex-direction: column;
 align-items: center;
 position: relative;
 
 .title {
     font-weight: bold;
     border-bottom: 1px solid #333;
     width: 60%;
     text-align: center;
     margin: 10px;
 }

 p {
     margin: 10px;
     word-break: break-all;
     white-space: pre-wrap;
 }

  &:hover {
      cursor: pointer;
      animation: bounce 0.5s linear;
  }

  .fa-trash-alt{
     color:${(props) => props.theme.colors.danger};
     position:absolute;
     margin: 10px;
     right: 15px;
 }

  @keyframes bounce {
   20% {
           transform: translateY(-6px);
   }
   40% {
           transform: translateY(0px);
   }

   80% {
           transform: translateY(-2px);
   }
   100% {
           transform: translateY(0);
   }
}
 

`

export const Container = styled.div`
display: flex;

`