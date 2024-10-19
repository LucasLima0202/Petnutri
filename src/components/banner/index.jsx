import BannerSvg from '/public/assets/banner.svg';
import styled, { css } from 'styled-components';
import Button from "../button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll'; // Importando o componente Link do react-scroll




const BackgroundBanner = styled.div`
background-image: ${props => `url(${props.$backgroundImage})`};
flex-grow: 1;
    background-repeat: no-repeat;
    align-items: center;
    min-height: 100vh;
    justify-content:center;
    margin: 0;
    padding:0;
    max-width: 100%;
    background-size: cover;
`

const ContainerBig = styled.section`
display: flex;
align-items:center;
gap: 10%;
justify-content:space-evenly;
padding-bottom:7%;
flex-direction:row;

@media (max-width: 768px) {
    flex-direction:column;
  }
`

const ContainerInfo = styled.article`
display:flex;
flex-flow: column;
@media (max-width: 768px) {
  align-items:center;
}
`

const Title = styled.h1`
margin:0;
font-size:8.5rem;
line-height:60px;
margin-left:-1.5%;
margin-bottom:10%;
font-weight:600;
color: #1A2129;

@media (max-width: 468px) {
  font-size:5rem;
  text-align:center;
  width:100%;

}

`

const SubTitle = styled.p`
font-size: 1.1rem;
width:95%;
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
    width:80%;
}

@media (max-width: 468px) {
  font-size:0.9rem;
  text-align:center;
  width:80%;
}

`
const SectionButton = styled.div`
display:flex;
flex-flow: row;
align-items:flex-start;
gap:1rem;

@media (max-width: 768px) {
    text-align:center;
    font-size:3vw;
    margin-top:4%;
}

@media (max-width: 450px) {
   flex-direction:column;
   margin-top:5%;
  }
`

const ContainerSvg = styled.div`
  display: flex;
  padding-top: 10%;
  align-items: center;

  svg {
    width: 39vw; /* Definindo um tamanho padrão para o SVG */
    height: auto; /* Mantendo a proporção da altura */
  }

  @media (max-width: 768px) {
    svg {
        margin:0;
        width: 55vw;
    }
}
  @media (max-width: 468px) {
    svg {
      margin:0;
      width: 75vw;
    }
  }
`

const Outline = css`
  background-color: transparent;
  border: solid 1.9px #ec4755;
  border-radius: 10px;
  text-align: center;
  width: 200px;
  font-size: 16px;
  font-weight: 600;
  position: relative; /* Adicione esta linha */
  transition: all ease-in-out 0.2s;

  &:hover {
    background-color: #ffffff;
    color: #e0404e;

    /* Move o ícone para a direita ao passar o mouse */
    svg {
      transition: all ease-in-out 0.2s;
      transform: translateX(5px); /* Ajuste o valor conforme necessário */
    }
  }
`;

const Default = css`
background-color: #EC4755;
border-radius: 10px;
text-align:center;
width: 200px;
font-size: 16px;
font-weight: 600;
color: #ffffff;
transition: all ease-in-out 0.2s;
&:hover {
    transform: scale(1.03)
  }

  @media (max-width: 450px) {
    font-size:15px;
    width:200px;
  }
`



const Banner = ({backgroundImage,petname}) => {

    return (
        <BackgroundBanner $backgroundImage={backgroundImage}>
            <ContainerBig>
                <ContainerInfo>
                    <SubTitle>
                    NOME DO PET
                    </SubTitle>
                    <Title>{petname}</Title>
                    <SectionButton>
                    <Link to="nutri" smooth={true} duration={500}>
                        <Button 
                        title="Plano de Nutrição"
                        gradient={Default}
                        color="#000000"
                     
                        />
                                                </Link>

                          <Link to="dados" smooth={true} duration={500}>
                            <Button
                                title="Ver Dados"
                                gradient={Outline}
                                color="#EC4755"
                            >
                                <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '8px' }} />
                            </Button>
                        </Link>
                    </SectionButton>
                </ContainerInfo>
                <ContainerSvg>
                  <BannerSvg></BannerSvg>
                </ContainerSvg>
            </ContainerBig>
        </BackgroundBanner>

    )
}

export default Banner