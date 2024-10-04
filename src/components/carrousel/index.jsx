import React from 'react';
import { Carousel } from 'primereact/carousel';
import { PrimeReactProvider } from 'primereact/api';
import Item from './item';
import { faChartColumn } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import 'primereact/resources/themes/saga-blue/theme.css';  // Escolha o tema que preferir
import 'primereact/resources/primereact.min.css';           // Estilos base do PrimeReact
import 'primeicons/primeicons.css';   
import styled, { css } from 'styled-components';

// Variáveis CSS para gradientes e estilos de ícones
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

// Array de itens para o Carousel
const items = [
  {
    icon: faChartColumn, 
    gradient: GradientHeadingPurple, 
    gradienticon: GradientFillIconp, 
    title: "Strategic Planning",
    label: "In depth research about the company trajectory and goals",
    anchor: "#id",
    anchorcolor: "#7508CC"
  },
  {
    icon: faChartColumn, 
    gradient: GradientHeadingPurple, 
    gradienticon: BlankFillIconp, 
    title: "Content Production",
    label: "Execution of communication strategies with a content calendar and team coordination",
    anchor: "#id",
    anchorcolor: "#7508CC"
  },
  {
    icon: faCalendar, 
    gradient: GradientHeadingBlue, 
    gradienticon: GradientFillIconb, 
    title: "Communication Team Leadership",
    label: "Guiding your team from content creation to final execution",
    anchor: "#id",
    anchorcolor: "#4F4BB0"
  },
  {
    icon: faChartColumn, 
    gradient: GradientHeadingPurple, 
    gradienticon: BlankFillIconp, 
    title: "Content Production",
    label: "Execution of communication strategies with a content calendar and team coordination",
    anchor: "#id",
    anchorcolor: "#7508CC"
  },
  {
    icon: faCalendar, 
    gradient: GradientHeadingBlue, 
    gradienticon: GradientFillIconb, 
    title: "Communication Team Leadership",
    label: "Guiding your team from content creation to final execution",
    anchor: "#id",
    anchorcolor: "#4F4BB0"
  },
  {
    icon: faCalendar, 
    gradient: GradientHeadingBlue, 
    gradienticon: GradientFillIconb, 
    title: "Communication Team Leadership",
    label: "Guiding your team from content creation to final execution",
    anchor: "#id",
    anchorcolor: "#4F4BB0"
  }
];

// Função para renderizar os itens no Carousel
const itemTemplate = (item) => {
  return (
    <Item
      icon={item.icon}
      gradient={item.gradient}
      gradienticon={item.gradienticon}
      title={item.title}
      label={item.label}
      anchor={item.anchor}
      anchorcolor={item.anchorcolor}
    />
  );
};

// Estilo personalizado para o container do Carousel
const Container = styled.div`
  width: 85vw;
  margin: 0 auto;
  display:flex;
  justify-content:center;
  align-items:center;
  .p-carousel-item {
    display: flex;
    justify-content: center; /* Centraliza os itens */
  }

  .p-carousel {
    max-width: 100%; 
  }

  .p-carousel-content {
    display: flex;
    justify-content: center; /* Centraliza os itens dentro do conteúdo do carrossel */
  }


.p-carousel .p-carousel-indicators button:active {
    background-color: #7508CC; /* Cor ao clicar no indicador */
}

.p-carousel .p-carousel-indicators button:focus {
    background-color: #7508CC; /* Cor ao focar no indicador */
}

.p-carousel .p-carousel-indicators button:hover {
    background-color: #7508CC; /* Cor ao passar o mouse sobre o indicador */
}

/* Adicionando a classe para o estado ativo */
.p-carousel .p-carousel-indicators button.p-highlight {
    background-color: #7508CC; /* Cor para o indicador ativo */
}

/* Se houver uma classe específica aplicada ao estado desativado */
.p-carousel .p-carousel-indicators button:disabled {
    background-color: #7508CC; /* Cor para indicadores desativados (se aplicável) */
}

`;

// Componente Ccarrousel
const Ccarrousel = () => {
  return (
    <Container>
      <PrimeReactProvider>
        <Carousel 
          value={items} 
          numScroll={1} 
          numVisible={2}
          itemTemplate={itemTemplate} 
          circular={true} /* Faz com que o carrossel circule */
          responsiveOptions={[
            {
              breakpoint: '1024px',
              numVisible: 3,
              numScroll: 1
            },
            {
              breakpoint: '768px',
              numVisible: 2,
              numScroll: 1
            },
            {
              breakpoint: '560px',
              numVisible: 1,
              numScroll: 1
            }
          ]}
        />
      </PrimeReactProvider>
    </Container>
  );
};

export default Ccarrousel;
