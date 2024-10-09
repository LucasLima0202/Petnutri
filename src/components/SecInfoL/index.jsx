import styled, { css } from 'styled-components';
import Button from "../button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartColumn } from '@fortawesome/free-solid-svg-icons';
import { width } from '@fortawesome/free-regular-svg-icons/faAddressBook';

// Button Gradients
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
  box-shadow: 0 2px 5px 0 #FFFFFF;
`;

// Estilização do componente
const SectionBackground = styled.div`
  ${props => props.backgroundgradient}; /* Aqui você mantém o estilo de fundo */
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse; /* Corrigido */
`;

const ContainerSvg = styled.div`
  width: 100%;
  background-image: ${props => `url(${props.$svg})`};
  text-align:center;
  padding-right: 5%;  
  display:flex;
  align-items:center;
  justify-content:center;
  img{
    width:35vw;
    }

`;

const ContainerInfo = styled.div`
  width: 100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
  padding-left:10%; 
  margin:0;
`;

const SectionList = styled.div`
margin-bottom:5%;

`;

const List = styled.ul`
  font-size: 1rem;
  padding-left:2%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
`;
const ListItem = styled.li`
  margin-bottom: 8px; /* Espaçamento entre os itens */
  display: flex;
  align-items: center; /* Alinha ícone e texto na vertical */
  color: ${props => props.infopcolor || '#000'};
  list-style: none; /* Remove o marcador de lista padrão */

  &::before {
    content: url(${props => props.listicon}); /* Adiciona o ícone antes do texto */
    display: inline-block;
    margin-right: 10px; /* Espaçamento entre o ícone e o texto */
  }
`;

const BoxIcon = styled.div`
  ${props => props.gradienticon};
  height: 56.98px;
  width: 56.98px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  z-index: 2;
  margin-bottom: 3%;
  svg4{
    font-size: 30px;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom:2%;
  color: ${props => props.titlecolor || '#000'};
`;

const Infop = styled.p`
  font-size: 1rem;
  margin-bottom:4%;
  width: 100%;  
  text-align:left;
  color:${props => props.infopcolor || '#000'};
`;

// Componente que recebe title, infop, e list como props
const SecInfoL = ({ title, infop, list, gradienticon, icon,id,backgroundgradient, titlecolor,infopcolor,svgPath,listicon,btngradient,btncolor }) => {
  return (  
    <>
    
      <SectionBackground backgroundgradient={backgroundgradient} >
        <ContainerSvg>
            <img src={svgPath} alt={title} />
        </ContainerSvg>

        <ContainerInfo id={id}>
          <BoxIcon gradienticon={gradienticon}>
            <FontAwesomeIcon icon={icon} fontSize={25} />
          </BoxIcon>

          <Title titlecolor={titlecolor}>{title}</Title>

          <Infop infopcolor={infopcolor}>{infop}</Infop>

          <SectionList>
            <List>
              {list.map((item, index) => (
                <ListItem listicon={listicon} key={index} infopcolor={infopcolor}>{item}</ListItem>
              ))}
            </List>
          </SectionList>

          <Button 
            title="Solutions Start Now"
            gradient={btngradient}
            color={btncolor}
          />
        </ContainerInfo>
      </SectionBackground>
    </>
  );
};

export default SecInfoL;
