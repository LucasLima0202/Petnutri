import React from "react";
import styled from "styled-components";
import Sep from "../sep";

// Estilos do SubTitleInfo
const SubTitleInfo = styled.p`
  font-size: 1.1rem;
  width: 100%;
  font-weight: 400; /* Ajustado para um valor válido */
  color: #FF8080;
  margin:0;
  text-align:center;
  @media (max-width: 985px) {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    text-align: center;
    font-size: 3vw;
    margin-top: 4%;
    width: 100%;
  }

  @media (max-width: 468px) {
    font-size: 0.9rem;
    text-align: center;
    width: 100%;
  }
`;
const ContainerCenter = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`

// Estilos do Title
const Title = styled.h1`
  font-size: 3rem;
  width: 70%;
  font-weight: 700;
  color: #333;
  margin-bottom: 2%;
  text-align: center;
  line-height:40px;
  @media (max-width: 985px) {
    font-size: 1.4rem;
  }

  @media (max-width: 768px) {
    text-align: center;
    font-size: 5vw;
    margin-top: 2%;
    width: 100%;
  }

  @media (max-width: 468px) {
    font-size: 1.7rem;
    text-align: center;
    width: 100%;
  }
`;

// Estilos do ContainerInfoNutri
const ContainerInfoNutri = styled.div`
  display: flex;
  margin-top:4%;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 468px) {
    padding: 10px;
    width:80%;
  }
`;

const PlanoNutriComponent = () => {
  return (
    <ContainerCenter>
    <Sep></Sep>
    <ContainerInfoNutri id="nutri">
      <SubTitleInfo>PLANO DE NUTRIÇÃO</SubTitleInfo>
      <Title>Cronograma Personalizado de Nutrição para o Seu Pet</Title>
    </ContainerInfoNutri>
    </ContainerCenter>
  );
};

export default PlanoNutriComponent;
