import styled, { css } from 'styled-components';
import Button from "../button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const ContainerButton = styled.div`
display:flex;
justify-content:center;
gap:2%;
width:90%;
color:#ffffff;
font-weight:500;
align-items:center;
padding-bottom:20px;
p{
    font-size:1.5rem;
}
@media (max-width: 668px) {
flex-direction:column;
p{
    text-align:center;
}
}
`

const Outline = css`
  background-color: transparent;
  border: solid 1.9px #ec4755;
  border-radius: 10px;
  text-align: center;
  background-color: #ffffff;

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

const BackgroundBanner = styled.div`
background-image: ${props => `url(${props.$backgroundImage})`};
flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 60vh;
    justify-content:center;
    margin: 0;
    border-radius:12px;
    padding:0;
    max-width: 90%;
    flex-direction:column;
    background-size: cover;
    margin-top:2%;
margin-bottom:2%;
`

const ContainerCenter = styled.div`
display:flex;
align-items:center;
justify-content:center;



@media (max-width: 468px) {
margin-top:10%;
margin-bottom:10%;
}
`
const Text = styled.h1`
margin:0;
font-size:1.8rem;
line-height:60px;
text-align:left;
padding:4%;
font-weight:500;
color: #ffffff;
@media (max-width: 650px) {
    text-align:center;
  }
@media (max-width: 468px) {
  font-size:1.5rem;
  text-align:center;
  width:100%;
  line-height:normal;

}

`
const UlCustom = styled.ul`
display:flex;
gap:6%;
align-items:center;
padding-left:2%;
padding-right:2%;
padding-bottom:2%;
justify-content:center;
li{display:flex;
    text-align:center;
    flex-direction:column;
    align-items:center;
    font-weight:400;
    list-style:none;
    text-align:center;
    width:40%;
}
li img{
    width:10vw;
    text-align:center;
}

@media (max-width: 650px) {
    flex-direction:column;
    text-align:center;
li img{
    width:20vw;
    margin-top:10%;
}   
  }

  @media (max-width: 468px) {
    li{
        font-size:1rem;
        width:70%;
    }
  }
`

const NotepadWarning = ({backgroundImage,text}) => {
    return(
        <ContainerCenter>
            <BackgroundBanner $backgroundImage={backgroundImage}>
                <Text>
                    {text}
                </Text>
                <UlCustom>
                <li>
                    <img src="./assets/img1.png" />
                    Ração Fórmula Natural Fresh Meat
                </li>
                <li>
                    <img src="./assets/img2.png" />
                    Ração Fórmula Natural Fresh Meat Sensitive
                </li>
                <li>
                    <img src="./assets/img3.png"/>
                    N&D Prime Canine
Cordeiro & Blueberry Adult Mini
                </li>
                <li>
                    <img src="./assets/img4.png" />
                    Ração Farmina N&D Prime sabor Cordeiro e Blueberry Cães Adultos de Raças Grande
                </li> 
                </UlCustom>
                <ContainerButton>
                    <p>Para saber mais tire sua duvida diretamente comigo</p>
                    <a href="https://wa.me/31995543483" target="_blank" rel="noopener noreferrer">
                        <Button
                            title="Entrar em Contato"
                            gradient={Outline}
                            color="#EC4755"
                        >
                            <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '8px' }} />
                        </Button>
                    </a>
                </ContainerButton>
            </BackgroundBanner>
        </ContainerCenter>
    )
}
export default NotepadWarning