import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';



const ContainerBig = styled.section`
/* Permite posicionamento absoluto dentro */
display:flex;
align-items:center;
justify-content:center;
height:60vh;
`;

const ColorHeading = styled.div`
  ${props => props.gradient};
  width: 100%;
  height: 87.19px;
  border-radius: 6px 6px 0px 0px;
  position: relative;
`;

const BoxIcon = styled.div`
  ${props => props.gradienticon};
  height: 66.98px;
  width: 66.98px;
  position: absolute;
  top: 24%; /* Centraliza verticalmente */
  left: 13%; /* Alinha um pouco à esquerda */
  transform: translate(-50%, -50%); /* Centraliza o ícone em relação ao ponto de referência */
  z-index: 2;
  display: block;
  text-align:center;
  border-radius: 6px; /* Se precisar que o ícone seja circular */
  svg{
    padding-top:25%;
    font-size:30px;
  }

  @media (max-width: 768px) {
    height: 56.98px;
    width: 56.98px;
    left: 17%;
    svg{
      font-size:25px;
    }

  }
`;

const ContainerInfo = styled.div`
  height: 127px;
  width: 392px;
  margin-top:8%;
  padding-left:5%;
  display: flex;
  flex-flow:column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Title = styled.h1`
margin:0;
font-size:1.5rem;
font-weight:600;

@media (max-width: 468px) {
  font-size:1.3rem;
  text-align:left;
  width:80%;
}

`
const Label = styled.p`
font-size:1rem;
@media (max-width: 468px) {
  font-size:0.9rem;
  width:60%;
  text-align:left;
}
`

const ContainerWidth = styled.div`
  background-color: #ffffff;
  align-items:center;
  padding:0;
  margin:10px;
  width:100%;
  display: block;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;  flex-direction: column;
  border-radius:6px;
  align-items: center;
  height: 289.48px;
  width:80%;
  gap:0;
  position: relative; 
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

@media (max-width: 468px) {
  font-size:0.9rem;
  text-align:left;
  width:80%;
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
    width: 22%;
    left: 1em;
    transform: translateX(20%);
}

&:hover:before {
    transform: scaleX(0.3);
}

&:hover:after {
    transform: translateX(0);



}
}
`

const Item = ({ id, icon, gradient, gradienticon, title, label, anchor, anchorcolor }) => {
  const handleScroll = (e) => {
    e.preventDefault(); // Impede o comportamento padrão do link
    const targetElement = document.querySelector(anchor); // Seleciona o elemento de destino

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', // Efeito de rolagem suave
      });
    }
  };

  return (
    <ContainerBig key={id}>
      <ContainerWidth>
        <ColorHeading gradient={gradient} />
        <BoxIcon gradienticon={gradienticon}>
          <FontAwesomeIcon icon={icon} fontSize={25} />
        </BoxIcon>
        <ContainerInfo>
          <Title>{title}</Title>
          <Label>{label}</Label>
          <AnchorButton href={anchor} anchorcolor={anchorcolor} onClick={handleScroll} >
            See Details
            <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '8px' }} />
          </AnchorButton>
        </ContainerInfo>
      </ContainerWidth>
    </ContainerBig>
  );
};

export default Item;
