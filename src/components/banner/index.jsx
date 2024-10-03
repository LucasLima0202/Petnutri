import BannerSvg from '/public/assets/Ban.svg';
import styled, { css } from 'styled-components';
import Button from "../button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';




const BackgroundBanner = styled.div`
background-image: ${props => `url(${props.$backgroundImage})`};
flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 133vh;
    margin: 0;
    max-width: 100%;
    background-size: cover;
`

const ContainerBig = styled.section`
display: flex;
justify-content: center;
align-items:center;
gap: 1rem;
max-width: 90%;
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
  justify-content:center;
}
`
const Title = styled.h2`
font-size: 3.4rem;
font-weight: 600;
color: #ffffff;

@media (max-width: 985px) {
    font-size:2.6rem;
    
  }
@media (max-width: 768px) {
    text-align:center;
    font-size:7vw;
    margin:0;
  }

`
const SubTitle = styled.p`
font-size: 1.2rem;
width:95%;
font-weight: 000;
color: #ffffffc7;
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
  justify-content: center;
  padding-top: 10%;
  align-items: center;

  svg {
    width: 35vw; /* Definindo um tamanho padrão para o SVG */
    height: auto; /* Mantendo a proporção da altura */
  }

  @media (max-width: 768px) {
    svg {
        padding-left:13%;
        margin:0;
        width: 55vw;
    }
}
  @media (max-width: 468px) {
    svg {
      padding-left:13%;
      margin:0;
      width: 75vw;
    }
  }
`

const Outline = css`
background-color: transparent;
border: solid 1.9px #ffffff;
border-radius: 10px;
text-align:center;
width: 200px;
font-size: 16px;
font-weight: 600;

&:hover {
    background-color: #ffffff;
    color: #000000;
  }

  @media (max-width: 450px) {
    font-size:15px;
    width:200px;
  }
`

const Default = css`
background-color: #ffffff;
border-radius: 10px;
text-align:center;
width: 200px;
font-size: 16px;
font-weight: 600;
color: #000000;
transition: all ease-in-out 0.2s;
&:hover {
    transform: scale(1.03)
  }

  @media (max-width: 450px) {
    font-size:15px;
    width:200px;
  }
`



const Banner = ({backgroundImage}) => {
    return (
        <BackgroundBanner $backgroundImage={backgroundImage}>
            <ContainerBig>
                <ContainerInfo>
                    <Title>Communication solutions tailored for you</Title>
                    <SubTitle>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis et justo a pellentesque. Aliquam sagittis mollis libero eu molestie. Cras pellentesque condimentum placerat.
                    </SubTitle>
                    <SectionButton>
                        <Button 
                        title="Solutions Start Now"
                        gradient={Default}
                        color="#000000"
                        />
                        <Button 
                        title="Trial"
                        gradient={Outline}
                        color="#FFFFFF"
                        >
                        <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '8px' }} />
                        </Button>
                    </SectionButton>
                </ContainerInfo>
                <ContainerSvg>
                    <BannerSvg  /> 
                </ContainerSvg>
            </ContainerBig>
        </BackgroundBanner>

    )
}

export default Banner