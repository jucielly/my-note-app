import styled from 'styled-components'

const NoteCard = styled.div`
   background-color: ${props => props.theme.cardColors.orangeYellow};
   margin: 20px;
   height: 200px;
   width: 15%;
   box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 20px;
   border-radius: 5px;

   &:hover {
       cursor: pointer;
       animation: bounce 0.5s linear;
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


export default NoteCard;