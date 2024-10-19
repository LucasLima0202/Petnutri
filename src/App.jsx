import styled, { css } from 'styled-components';
import GlobalStyle from './components/GlobalStyle';

import Banner from './components/banner';

import OptimalInfo from './components/optimalinfo';

import React, { useRef } from 'react';
import Sep from './components/sep';
import MealPlan from './components/information';
import GeneralNotes from './components/generalinfo';
import NotepadWarning from './components/notepad';
import Footer from './components/footer';
import PlanoNutriComponent from './components/planonutriheadind';




// Estilo de fundo
const BackgroundGradient = styled.div`
  background-color: #ffffff;
  width: 100%;
  min-height: 100vh;
`;

const Services = styled.div`
  display: flex;
  flex-direction: column; /* Alinha os itens em coluna */
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
`;

const SubHedServices = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SubTitleInfo = styled.p`
font-size: 1.1rem;
width:100%;
font-weight: 000;
color: #FF8080;
margin-bottom:5%;
text-align:left;
margin-left:17%;
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


const BannerImg = '/public/assets/Hero.svg';
const BackgroundWarn = '/public/assets/backgroundwarn.svg';




const day = "Dia 1";
const meals = [
  {
    title: "Café da Manhã",
    calories: 130,
    protein: "50g de frango desfiado cozido (sem pele, sem tempero)",
    carb: "25g de arroz integral cozido",
    vegetables: "10g de cenoura cozida em pequenos pedaços",
    fat: "1 colher de chá de azeite de oliva extra virgem",
  },
  {
    title: "Almoço",
    calories: 120,
    protein: "40g de carne bovina magra (patinho) cozida e sem gordura",
    carb: "15g de batata-doce cozida e amassada",
    vegetables: "10g de abobrinha cozida em cubinhos",
  },
  {
    title: "Jantar",
    calories: 120,
    protein: "40g de peixe branco (tilápia ou merluza) cozido",
    carb: "20g de quinoa cozida",
    vegetables: "10g de espinafre cozido picado",
  },
  {
    title: "Snacks",
    calories: 50,
    protein: "1 colher de chá de iogurte natural sem açúcar",
    carb: "Pequenos pedaços de maçã (sem sementes) ou morangos (cerca de 2 ou 3 pedaços)",
  },
];

const day2 = "Dia 2";
const meals2 = [
  {
    title: "Café da Manhã",
    calories: 130,
    protein: "45g de carne moída de frango ou peru cozida",
    carb: "20g de aveia cozida",
    vegetables: "10g de abóbora cozida e amassada",
    fat: "1 colher de chá de óleo de coco",
  },
  {
    title: "Almoço",
    calories: 120,
    protein: "40g de carne de frango (coxão mole ou peito) cozida",
    carb: "15g de batata inglesa cozida e amassada",
    vegetables: "10g de brócolis cozido",
  },
  {
    title: "Jantar",
    calories: 120,
    protein: "40g de ovo cozido (pode ser metade da clara e metade da gema)",
    carb: "20g de arroz integral",
    vegetables: "10g de vagem cozida picada",
  },
  {
    title: "Snacks",
    calories: 50,
    protein: "1 colher de chá de ricota ou queijo cottage",
    carb: "Alguns pedaços de banana (sem casca) ou melancia (sem sementes)",
  },
];


// Observações Gerais
const generalNotes = [
  {
    title: "Quantidade de proteína:",
    content: "Cada refeição deve conter uma boa fonte de proteína animal (carne, frango, peixe ou ovo), pois é fundamental para a saúde muscular do cão."
  },
  {
    title: "Carboidratos:",
    content: "O arroz integral, quinoa, batata-doce e aveia são boas fontes de energia, ajudando a manter o nível de atividade sem provocar picos de açúcar no sangue."
  },
  {
    title: "Vegetais:",
    content: "Cenoura, abóbora, abobrinha, espinafre, brócolis e vagem são vegetais seguros para cães, ricos em vitaminas e fibras."
  },
  {
    title: "Gorduras:",
    content: "Use pequenas quantidades de gorduras saudáveis, como azeite de oliva ou óleo de coco, para promover uma pele saudável e pelos brilhantes."
  },
  {
    title: "Hidratação:",
    content: "Tenha sempre água fresca e limpa disponível."
  },
];

// Suplementação
const supplementation = [
  {
    title: "Ômega 3:",
    content: "Suplementos de ômega 3 (como óleo de peixe) podem ser benéficos para a pele e articulações, se recomendados pelo veterinário."
  },
  {
    title: "Vitaminas e Minerais:",
    content: "Um suplemento vitamínico/mineral recomendado pelo veterinário pode ajudar a garantir que o cão receba todos os nutrientes necessários."
  },
];



function App() {
  return (
    <BackgroundGradient>
      <GlobalStyle />
      <>
        <Banner
          backgroundImage={BannerImg}
          petname="Nala"
        />
        <SubHedServices>
          <Sep></Sep>
          <OptimalInfo
            title="DADOS DO PET"
            subinfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis et justo a pellentesque. Aliquam sagittis mollis libero eu molestie. Cras pellentesque condimentum placerat. "
          />

        </SubHedServices>
        <Services>
          <PlanoNutriComponent/>
          <MealPlan day={day} meals={meals} />
        </Services>
        <Sep></Sep>
        <Services>
          <MealPlan day={day2} meals={meals2} />
        </Services>
        <div>
          <Sep></Sep>
          <GeneralNotes title="Observações Gerais" notes={generalNotes} />
          <Sep></Sep>
          <GeneralNotes title="Suplementação" notes={supplementation} />
        </div>
        <div>
          <Sep></Sep>
          <NotepadWarning 
          backgroundImage={BackgroundWarn}
          text="Aqui estão algumas sugestoes de raçoes naturais"
          />
        </div>
        <Footer></Footer>
      </>
    </BackgroundGradient>
  );
}

export default App;
