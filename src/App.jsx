import styled, { css } from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import Navbar from './components/navbar';
// import Button from './components/button';
import Banner from './components/banner';
import Slider from './components/slider';
import OptimalInfo from './components/optimalinfo';
import SecInfoR from './components/SecInfoR';
import SecInfoL from './components/SecInfoL';
import React, { useRef } from 'react';
//icon
import { faChartColumn } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';


// Estilo de fundo
const BackgroundGradient = styled.div`
  background-color: #ffffff;
  width: 100%;
  min-height: 100vh;
`;

// Definindo os gradientes
const GradientFillPurpleBTN = css`
  background-image: linear-gradient(to right, #7309CA, #5020AB, #7309CA, #641FE7);
  box-shadow: 0 4px 15px 0 #641FE7;
`;

const GradientFillBlueBTN = css`
  background-image: linear-gradient(to right, #28265A, #4F4BB0, #28265A, #4F4BB0);
  box-shadow: 0 4px 15px 0 #28265A;
`;

const GradientOutBlueBTN = css`
  background-image: linear-gradient(to right, #FFFFFF, #6A68AF, #FFFFFF);
  box-shadow: 0 4px 15px 0 #FFFFFF;
`;

const GradientOutPurpleBTN = css`
  background-image: linear-gradient(to right, #FFFFFF, #CD9BFF, #FFFFFF);
  box-shadow: 0 4px 15px 0 #FFFFFF;
`;

const GradientHeadingPurple = css`
  background-image: linear-gradient(78deg, #7508CC, #4D22A9);
`;

const GradientFillIconp = css`
  background-color: #7508CC;
  color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const BlankFillIconp = css`
  background-color: #FFFFFF;
  color: #7508CC;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const GradientHeadingBlue = css`
  background-image: linear-gradient(78deg, #4F4BB0, #21204A);
`;

const GradientFillIconb = css`
  background-color: #4F4BB0;
  color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const BlankFillIconb = css`
  background-color: #FFFFFF;
  color: #4F4BB0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const GradientHeadingDark = css`
  background-image: linear-gradient(78deg, #001230, #2E1B7A);
`;

//background gradient 
const GradientPurpleBackground = css`
  background-image: linear-gradient(78deg, #7309CA, #5020AB);
`;

const GradientBlueBackground = css`
  background-image: linear-gradient(78deg, #4F4BB0, #28265A);
`;

const WhiteBackground = css`
  background-image: #FFFFFF;
`;



const BannerImg = '/public/assets/BG.svg';


const Services = styled.div`
display:flex;
height: 60vh;
justify-content:center;
align-items:center;
`
const SubHedServices = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

const data1 = [
  "Syncing content across platforms for consistency",
  "Streamlining content creation through effective teamwork",
  "Ensuring cohesive messaging across all media"
];
const data2 = [
  "Strategy reviews, content guidance, and communication planning.",
  "Streamlining content creation through effective teamwork",
  "Ensuring cohesive messaging across all media"
];
const data3 = [
  "Group Management",
  "Broadcasting Operations",
  "Ensuring cohesive messaging across all media"
];

function App() {
  const contentRef = useRef(null);
  const mentorshipRef = useRef(null);

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <BackgroundGradient>
      <GlobalStyle />
      <>
        <Navbar/>
        <Banner
        backgroundImage={BannerImg}
        />
        <SubHedServices>
          <OptimalInfo 
          title="Our Services"
          subinfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis et justo a pellentesque. Aliquam sagittis mollis libero eu molestie. Cras pellentesque condimentum placerat. "
          />
        </SubHedServices>
        <Services>
          <Slider/>
        </Services>
        <div ref={contentRef}>
          <SecInfoR
            title="Content Production"
            titlecolor="#FFFFFF"
            id="content"
            infop="Execution of communication strategies with a detailed content calendar for social media, website, and offline media, along with team coordination throughout the content creation process."
            infopcolor="#E7E7E7"
            list={data1}
            gradienticon={BlankFillIconp}
            listicon="assets/listiconpurple.svg"
            icon={faClipboardList}
            backgroundgradient={GradientPurpleBackground}
            svgPath="/public/assets/content1.svg"
            btngradient={GradientOutPurpleBTN}
            btncolor="#7508CC"
            btnlabel="Take a look"
          />
        </div>
        <div ref={mentorshipRef}>
          <SecInfoL
            title="Mentorship Programs"
            id="mentorship"
            titlecolor="#2C0E56"
            infop="Enhance your skills with our tailored mentorship sessions"
            infopcolor="#555555"
            list={data2}
            gradienticon={GradientFillIconp}
            icon={faCalendar}
            listicon="assets/listiconpurplewhite.svg"
            backgroundgradient={WhiteBackground}
            svgPath="/public/assets/content2.svg"
            btngradient={GradientFillPurpleBTN}
            btncolor="#ffffff"
            btnlabel="See details"
          />
        </div>
        <div ref={contentRef}>
          <SecInfoR
            title="Whatsapp Management"
            titlecolor="#FFFFFF"
            id="content"
            infop="Optimize your outreach with strategic communication solutions."
            infopcolor="#E7E7E7"
            list={data3}
            gradienticon={BlankFillIconb}
            listicon="assets/listiconblue.svg"
            icon={faChartColumn}
            backgroundgradient={GradientBlueBackground}
            svgPath="/public/assets/content3.svg"
            btngradient={GradientOutBlueBTN}
            btncolor="#28265A"
            btnlabel="Take a look"
          />
        </div>
        <div ref={mentorshipRef}>
          <SecInfoL
            title="Mentorship Programs"
            id="mentorship"
            titlecolor="#2C0E56"
            infop="Enhance your skills with our tailored mentorship sessions"
            infopcolor="#555555"
            list={data2}
            gradienticon={GradientFillIconp}
            icon={faCalendar}
            listicon="assets/listiconpurplewhite.svg"
            backgroundgradient={WhiteBackground}
            svgPath="/public/assets/content2.svg"
            btngradient={GradientFillPurpleBTN}
            btncolor="#ffffff"
          />
        </div>
        <div ref={contentRef}>
          <SecInfoR
            title="Content Production"
            titlecolor="#FFFFFF"
            id="content"
            infop="Execution of communication strategies with a detailed content calendar for social media, website, and offline media, along with team coordination throughout the content creation process."
            infopcolor="#E7E7E7"
            list={data1}
            gradienticon={BlankFillIconp}
            listicon="assets/listiconpurple.svg"
            icon={faClipboardList}
            backgroundgradient={GradientPurpleBackground}
            svgPath="/public/assets/content1.svg"
            btngradient={GradientOutPurpleBTN}
            btncolor="#7508CC"
          />
        </div>
      </>
    </BackgroundGradient>
  );
}

export default App;
