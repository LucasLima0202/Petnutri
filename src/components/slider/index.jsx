import { Swiper, SwiperSlide } from 'swiper/react'
import styled, { css } from 'styled-components';
import { faChartColumn } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import Item from './item';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import  { useRef } from 'react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';



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

const BlankFillIcondark = css`
  background-color: #FFFFFF;
  color: #001230;
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

const data = [
    {
      id: 1,
      icon: faClipboardList, 
      gradient: GradientHeadingPurple, 
      gradienticon: GradientFillIconp, 
      title: "Content Production ",
      label: "Execution of communication strategies with a content calendar and team coordination",
      anchor: "#content",
      anchorcolor: "#7508CC"
    },
    {
      id: 2,  
      icon: faCalendar, 
      gradient: GradientHeadingPurple, 
      gradienticon: BlankFillIconp, 
      title: "Mentorship Programs",
      label: "In depth research about the company trajectory and goals ",
      anchor: "#mentorship",
      anchorcolor: "#7508CC"
    },
    {
      id: 3,  
      icon: faChartColumn, 
      gradient: GradientHeadingBlue, 
      gradienticon: GradientFillIconb, 
      title: "Strategic Planning",
      label: "Building tailored strategies for sustainable growth and success",
      anchor: "#id",
      anchorcolor: "#4F4BB0"
    },
    {
      id: 4,
      icon: faUserGroup, 
      gradient: GradientHeadingBlue, 
      gradienticon: BlankFillIconb, 
      title: "Communication Team Leadership",
      label: "Guiding your team from content creation to final execution",
      anchor: "#id",
      anchorcolor: "#4F4BB0"
    },
    {
      id: 5,
      icon: faChartLine, 
      gradient: GradientHeadingDark, 
      gradienticon: BlankFillIcondark, 
      title: "Communication Team Leadership",
      label: "Guiding your team from content creation to final execution",
      anchor: "#id",
      anchorcolor: "#001230"
    }
  ];

  const StyledSwiper = styled(Swiper)`
  .swiper-button-next,
  .swiper-button-prev {
    color: #7508CC; // Cor das setas
    bottom: -30px; // Mover as setas para baixo
  }

  .swiper-pagination-bullet {
    background-color: #ffffff; // Cor inativa dos pontos
  }

  .swiper-pagination-bullet-active {
    background-color: #7508CC; // Cor ativa dos pontos
  }
`;

  const SliderContainer = styled.div`
  width: 95%; // Define a largura que você deseja

  max-width: 1200px; // Largura máxima para garantir que ele não seja muito grande em telas grandes
  margin: 0 auto; // Centraliza o slider na tela
`;

const SwiperContainerButton = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content:space-between;
  top: -12rem;
  height: 100%;  // Faz com que os botões fiquem centralizados verticalmente em relação ao slider
  z-index: 10;  // Garante que os botões fiquem acima do slider
  @media (max-width: 468px) {
 top:-13rem;
 justify-content:space-between;
}
`;

const Controlerbutton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  color: #5a23c0;
  font-size: 20px;
  transition: transform 0.3s ease;
  margin-bottom:5%;
  &:hover {
    transform: scale(1.2);  // Um pequeno efeito ao passar o mouse sobre o botão
  }

  &:focus {
    outline: none;
  }

`;

const Slider = () => {

    const swiperRef = useRef(null);
  
    const handlePrev = () => {
      if (swiperRef.current) {
        swiperRef.current.swiper.slidePrev();  // Retrocede apenas um slide
      }
    };
  
    const handleNext = () => {
      if (swiperRef.current) {
        swiperRef.current.swiper.slideNext();  // Avança apenas um slide
      }
    };


    return(
        <SliderContainer>
           <StyledSwiper
        ref={swiperRef}
        centeredSlides={true}
        pagination={{
          type: 'fraction',
        }}
        effect='slide'
        modules={[Pagination, Navigation]} // Importa os módulos de navegação e paginação
        slidesPerView={2}
        slidesPerGroup={1} 
        loop={false} 

        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Item
              icon={item.icon}
              gradient={item.gradient}
              gradienticon={item.gradienticon}
              title={item.title}
              label={item.label}
              anchor={item.anchor}
              anchorcolor={item.anchorcolor}
            />
          </SwiperSlide>
        ))}
      </StyledSwiper>
      <SwiperContainerButton>
          <Controlerbutton onClick={handlePrev}><FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: '1.5rem'}} /></Controlerbutton>
          <Controlerbutton onClick={handleNext}><FontAwesomeIcon icon={faChevronRight} style={{ fontSize: '1.5rem' }} /></Controlerbutton>
      </SwiperContainerButton>
        </SliderContainer>
    )
}

export default Slider;

