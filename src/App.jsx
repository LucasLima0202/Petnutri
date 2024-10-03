import styled, { css } from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import Navbar from './components/navbar';
import Button from './components/button';
import Banner from './components/banner';
import Item from './components/carrousel/item';

// Estilo de fundo
const BackgroundGradient = styled.div`
  background-color: #ffffff;
  width: 100%;
  min-height: 100vh;
`;

// Definindo os gradientes
const GradientFillPurple = css`
  background-image: linear-gradient(to right, #7309CA, #5020AB, #7309CA, #641FE7);
  box-shadow: 0 4px 15px 0 #641FE7;
`;

const GradientFillBlue = css`
  background-image: linear-gradient(to right, #28265A, #4F4BB0, #28265A, #4F4BB0);
  box-shadow: 0 4px 15px 0 #28265A;
`;

const GradientOutBlue = css`
  background-image: linear-gradient(to right, #FFFFFF, #6A68AF, #FFFFFF);
  box-shadow: 0 4px 15px 0 #FFFFFF;
`;

const GradientOutPurple = css`
  background-image: linear-gradient(to right, #FFFFFF, #CD9BFF, #FFFFFF);
  box-shadow: 0 4px 15px 0 #FFFFFF;
`;
const BannerImg = '/public/assets/BG.svg';


const Services = styled.div`
display:flex;
height: 80vh;
justify-content:center;
align-items:center;
background-color: #b8b8b8;
`
import { faChartColumn } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';


const GradientHeadingPurple = css`
  background-image: linear-gradient(78deg, #7508CC, #4D22A9);

`;

const GradientFillIconp = css`
  background-color: #7508CC;
  color:#ffffff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

const BlankFillIconp = css`
  background-color: #FFFFFF;
  color:#7508CC;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

const GradientHeadingBlue = css`
  background-image: linear-gradient(78deg, #4F4BB0, #21204A);

`;

const GradientFillIconb = css`
  background-color: #4F4BB0;
  color:#ffffff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

const BlankFillIconb = css`
  background-color: #FFFFFF;
  color:#4F4BB0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

const GradientHeadingDark = css`
  background-image: linear-gradient(78deg, #001230, #2E1B7A);

`;

function App() {
  return (
    <BackgroundGradient>
      <GlobalStyle />
      <>
        <Navbar/>
        <Banner
        backgroundImage={BannerImg}
        />
        <Services>
          <Item 
          icon={faChartColumn} 
          gradient={GradientHeadingPurple} 
          grandienticon={GradientFillIconp} 
          title="Strategic Planning"
          label="In depth research about the company tragectory and goals"
          anchor="#id"
          anchorcolor="#7508CC"
          />
          <Item 
          icon={faChartColumn} 
          gradient={GradientHeadingPurple} 
          grandienticon={BlankFillIconp} 
          title="Content Production"
          label="Execution of communication strategies with a content calendar and team coordination"
          anchor="#id"
          anchorcolor="#7508CC"
          />

          <Item 
          icon={faCalendar} 
          gradient={GradientHeadingBlue} 
          grandienticon={GradientFillIconb} 
          title="Communication Team Leadership"
          label="Guiding your team from content creation to final execution"
          anchor="#id"
          anchorcolor="#4F4BB0"
          />
         
        </Services>
      </>
    </BackgroundGradient>
  );
}

export default App;
