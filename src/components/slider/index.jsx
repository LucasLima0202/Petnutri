import { Swiper, SwiperSlide } from 'swiper/react'
import styled, { css } from 'styled-components';
import { faChartColumn } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import Item from '../carrousel/item';

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

const data = [
    {
      id: 1,
      icon: faChartColumn, 
      gradient: GradientHeadingPurple, 
      gradienticon: GradientFillIconp, 
      title: "Strategic Planning",
      label: "In depth research about the company trajectory and goals",
      anchor: "#id",
      anchorcolor: "#7508CC"
    },
    {
      id: 2,  
      icon: faChartColumn, 
      gradient: GradientHeadingPurple, 
      gradienticon: BlankFillIconp, 
      title: "Content Production",
      label: "Execution of communication strategies with a content calendar and team coordination",
      anchor: "#id",
      anchorcolor: "#7508CC"
    },
    {
      id: 3,  
      icon: faCalendar, 
      gradient: GradientHeadingBlue, 
      gradienticon: GradientFillIconb, 
      title: "Communication Team Leadership",
      label: "Guiding your team from content creation to final execution",
      anchor: "#id",
      anchorcolor: "#4F4BB0"
    },
    {
      id: 4,
      icon: faChartColumn, 
      gradient: GradientHeadingPurple, 
      gradienticon: BlankFillIconp, 
      title: "Content Production",
      label: "Execution of communication strategies with a content calendar and team coordination",
      anchor: "#id",
      anchorcolor: "#7508CC"
    },
    {
      id: 5,
      icon: faCalendar, 
      gradient: GradientHeadingBlue, 
      gradienticon: GradientFillIconb, 
      title: "Communication Team Leadership",
      label: "Guiding your team from content creation to final execution",
      anchor: "#id",
      anchorcolor: "#4F4BB0"
    },
    {
      id: 6,
      icon: faCalendar, 
      gradient: GradientHeadingBlue, 
      gradienticon: GradientFillIconb, 
      title: "Communication Team Leadership",
      label: "Guiding your team from content creation to final execution",
      anchor: "#id",
      anchorcolor: "#4F4BB0"
    }
  ];

const Slider = () => {



    return(
        <>
            <Swiper
                slidesPerView={2}
                pagination={{clickable:true}}
                navigation
                centeredSlidesBounds={true}
                spaceBetween={0}
                breakpoints={{
                    // when window width is >= 320px
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    // when window width is >= 480px
                    480: {
                      slidesPerView: 1,
                      spaceBetween: 30,
                    },
                    // when window width is >= 640px
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                  }}
            >
                {data.map(  (item) => (
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
            </Swiper>
        </>
    )
}

export default Slider;

