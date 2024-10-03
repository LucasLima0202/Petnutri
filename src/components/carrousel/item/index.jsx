import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';



const ContainerBig = styled.section`
  background-color: #ffffff;
  width: 455px;
  display: flex;
  margin:0.6%;
  flex-direction: column;
  border-radius:6px;
  align-items: center;
  height: 289.48px;
  position: relative; /* Permite posicionamento absoluto dentro */
`;

const ColorHeading = styled.div`
  ${props => props.gradient};
  width: 100%;
  height: 87.19px;
  border-radius: 6px 6px 0px 0px;
  position: relative;
`;

const BoxIcon = styled.div`
  ${props => props.grandienticon};
  height: 66.98px;
  width: 66.98px;
  position: absolute;
  top: 24%; /* Centraliza verticalmente */
  left: 13%; /* Alinha um pouco à esquerda */
  transform: translate(-50%, -50%); /* Centraliza o ícone em relação ao ponto de referência */
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px; /* Se precisar que o ícone seja circular */
  svg{
    font-size:30px;
  }
`;

const ContainerInfo = styled.div`
  height: 127px;
  width: 392px;
  margin-top:8%;
  display: flex;
  flex-flow:column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Title = styled.h1`
margin:0;
font-size:1.5rem;
font-weight:600;
`
const Label = styled.p`
font-size:1rem;

`
const AnchorButton = styled.a`
  /* color:${props => props.anchorcolor};
  text-decoration:none;
  transition: all ease-in-out 0.1s;
  &:hover{
  transform: scale(1.01);
  font-weight:600;  
  } */
  
    color:${props => props.anchorcolor};
    font-size: 1rem;
    text-decoration: none;
    margin-top: 1%;
    display: inline-block;
    font-weight: bold;
    padding: .5em;
    margin-left: -.5em;
    position: relative;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

    &:before, &:after {
        position: absolute;
        content: '';
        border-bottom: 3px solid ${props => props.anchorcolor};;
        border-radius: 1em;
        bottom: .3em;
        transition: transform .5s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    &:before {
        width: 1em;
        transform-origin: left;
    }

    &:after {
        width: 82%;
        left: 1em;
        transform: translateX(110%);
    }

    &:hover:before {
        transform: scaleX(0.3);
    }

    &:hover:after {
        transform: translateX(0);
    

}

`

const Item = ({ icon,gradient,grandienticon,title,label,anchor,anchorcolor}) => {
  return (
    <ContainerBig>
      <ColorHeading gradient={gradient}/>
      <BoxIcon grandienticon={grandienticon}>
        <FontAwesomeIcon icon={icon} fontSize={25}/>
      </BoxIcon>
      <ContainerInfo>
        <Title>{title}</Title>
        <Label>{label}</Label>
        <AnchorButton href={anchor} anchorcolor={anchorcolor}>
            See Details
        <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '8px' }} />
        </AnchorButton>
      </ContainerInfo>
    </ContainerBig>
  );
};

export default Item;
