import styled, { css } from 'styled-components';
import Button from "../button";

import SVGCloudBig from "/public/assets/VectorCloudBig.svg";
import SVGCloudSmall from "/public/assets/VectorCloudSmall.svg";
import SVGCloudUp from "/public/assets/VectorSvgCloudUp.svg";
import SVGCloudDown from "/public/assets/VectorSvgCloudDown.svg";
import Wave from '../SecStatistic/Wave';

const DivCloudSmall = styled.div`
  position: absolute;
  top: 0px; /* Ajuste conforme necessário */
  left:18rem; /* Ajuste conforme necessário */
  @media (max-width: 468px) {
    svg{
        width:20vw;
    }
    left:1rem;
    top:3rem;
}
`;

const DivCloudBig = styled.div`
  position: absolute;
  bottom: 50px; /* Ajuste conforme necessário */
  right: 2rem; /* Ajuste conforme necessário */
  z-index: 1; /* Para garantir que fique atrás do texto */
  @media (max-width: 468px) {
    svg{
        width:35vw;
    }
    right:0.5rem;
    top:22.2rem;
}
`;

const DivCloudDown = styled.div`
  position: absolute;
  bottom: 30px; /* Ajuste conforme necessário */
  left: 4rem; /* Ajuste conforme necessário */
  z-index: 1; /* Para garantir que fique atrás do botão */
  @media (max-width: 468px) {
    svg{
        width:25vw;
    }
    left:1rem;
    z-index:0;
    top:20.2rem;
}
`;

const DivCloudUp = styled.div`
  position: absolute;
  top: 0px; /* Ajuste conforme necessário */
  right: 9rem; /* Ajuste conforme necessário */
  z-index: 0; /* Para garantir que fique atrás do texto */
  @media (max-width: 468px) {
    svg{
        width:25vw;
    }
    right:1rem;
    top:0.5rem;
}
`;

const ContainerBackground = styled.div`
  height: 70vh;
  background-color: #F6EBFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative; /* Necessário para que os elementos com position: absolute sejam posicionados em relação ao container */
  overflow: hidden; /* Esconde qualquer parte do SVG que possa sair do container */
  @media (max-width: 468px) {
    align-items:center;
    justify-content:center;
    text-align:center;
}
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 2%;
  color: #4C1678;
  position: relative; /* Para garantir que o texto fique acima dos SVGs */
  z-index: 2;
  @media (max-width: 468px) {
    font-size: 1.8rem;
  }
`;

const Label = styled.p`
  font-size: 1rem;
  margin-bottom: 4%;
  width: 80%;  
  text-align: center;
  color: #676767;
  position: relative; /* Para garantir que o texto fique acima dos SVGs */
  z-index: 2;
  @media (max-width: 468px) {
    font-size: 0.9rem;
    width:90%;
    text-align: center;
    margin-bottom:9%;
  }
`;

const GradientFillPurpleBTN = css`
  background-image: linear-gradient(to right, #7309CA, #5020AB, #7309CA, #641FE7);
  box-shadow: 0 4px 15px 0 #641FE7;
`;

const SecCTA = () => {
  return (
    <>
        <Wave/>
    <ContainerBackground>
      <DivCloudBig>
        <SVGCloudBig />
      </DivCloudBig>
      <DivCloudSmall>
        <SVGCloudSmall />
      </DivCloudSmall>
      <DivCloudDown>
        <SVGCloudDown />
      </DivCloudDown>
      <DivCloudUp>
        <SVGCloudUp />
      </DivCloudUp>
      <Title>
        Let’s Elevate Your Digital Presence Together
      </Title>
      <Label>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis et justo a pellentesque. Aliquam sagittis mollis libero eu molestie. Cras pellentesque condimentum placerat.
      </Label>
      <Button 
        title="Check out"
        gradient={GradientFillPurpleBTN}
        color="#ffffff"
      />
    </ContainerBackground>
    </>
  );
};

export default SecCTA;
