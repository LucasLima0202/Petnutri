import styled from "styled-components";
import Cadastrado from '/public/assets/icons/Cadastrado.svg';
import Calendario from '/public/assets/icons/Calender.svg';
import Exercicio from '/public/assets/icons/Exercicio.svg';
import Pata from '/public/assets/icons/Paw.svg';
import Peso from '/public/assets/icons/Peso.svg';
import Raca from '/public/assets/icons/Raca.svg';
import IconBox from "./icon";
import SvgDado from '/public/assets/dados.svg';



const ContainerBig = styled.section`
display: flex;
justify-content: space-around;
align-items:center;
gap: 1%;
padding-bottom:7%;
flex-direction:row;

@media (max-width: 768px) {
    flex-direction:column;
    margin-bottom:5%;
  }
`

const ContainerInfoBoxIcon = styled.article`
display:flex;
flex-flow: column;

@media (max-width: 768px) {
  align-items:center;
  justify-content:center;
}
`

const ContainerSvg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 30vw; /* Definindo um tamanho padrão para o SVG */
    height: auto; /* Mantendo a proporção da altura */
  }

  @media (max-width: 768px) {
    svg {
        padding-left:13%;
        margin:0;
        text-align:center;
        width: 55vw;
    }
}
  @media (max-width: 468px) {
    svg {
      padding-left:0;
      margin:0;
      width: 60vw;
    }
  }
`

const SubTitle = styled.p`
font-size: 1.1rem;
width:100%;
font-weight: 000;
color: #FF8080;
margin-bottom:5%;
@media (max-width: 985px) {
    font-size:1.2rem;
    
  }
  @media (max-width: 768px) {
    text-align:center;
    font-size:3vw;
    margin-top:4%;
    width:100%;
}

@media (max-width: 468px) {
  font-size:0.9rem;
  text-align:justify;
  width:100%;
}

`
const CardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Duas colunas iguais */
  gap: 10px; /* Espaço entre os itens do grid */
  border-radius: 10px;
  width: 50vw;
  height: auto;
  margin:10px;
  margin-top:0;
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Para telas menores, uma coluna */
  }
`;

// Estilo para o ícone e o Box ao redor dele


const OptimalInfo = ({title,subinfo}) => {
    return(
       <ContainerBig  id="dados">
          <ContainerInfoBoxIcon >
            <SubTitle>
              {title}
            </SubTitle>
            <CardBox>
            <IconBox svgcomponent={Cadastrado} title="Cadastrado" subinfo="Sim" />
            <IconBox svgcomponent={Peso} title="Peso" subinfo="6,4 kg" />
            <IconBox svgcomponent={Pata} title="Cão ou Gato" subinfo="Cão" />
            <IconBox svgcomponent={Raca} title="Raça" subinfo="Shih Tzu" />
            <IconBox
              svgcomponent={Calendario}
              title="Data de Nascimento"
              subinfo="31/10/2021"
            />
            <IconBox
              svgcomponent={Exercicio}
              title="Atividade"
              subinfo="Mais Ativo"
            />
            </CardBox>
          </ContainerInfoBoxIcon>
          <ContainerSvg>
            <SvgDado/>
          </ContainerSvg>
       </ContainerBig>
    )
}

export default OptimalInfo;

