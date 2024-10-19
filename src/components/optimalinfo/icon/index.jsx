import styled from 'styled-components';

const CardIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;  // Alinha os itens à esquerda para consistência
  margin-bottom: 20px;  // Aumenta o espaço entre os itens para um visual mais limpo
  width: 100%;  // Garante que ocupe toda a largura do container pai
`;

const Box = styled.div`
  background-color: #FCEDED; // Cor do ícone em vermelho claro
  padding: 10px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin-right: 10px;  // Margem entre o ícone e o título
  text-align: center;

  svg {
    width: 35px;  // Define o tamanho consistente dos ícones SVG
    height: auto;  // Preserva a proporção do ícone
  }
`;

const TitleColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;  // Centraliza o título e a resposta verticalmente
`;

const IconTitle = styled.h1`
  font-size: 16px;
  color: #000; // Cor preta para o título
  margin: 0;  // Remove margens para consistência
 
`;

const IconSpan = styled.span`
  font-size: 14px;
  color: #4F5665; /* Cinza para o texto secundário */
  white-space: nowrap; /* Impede quebras de linha */
`;

const IconBox = ({ svgcomponent: SvgComponent, title, subinfo }) => {
  return (
    <CardIcon>
      <Box>
        <SvgComponent /> 
      </Box>
      <TitleColumn>
        <IconTitle>{title}</IconTitle>
        <IconSpan>{subinfo}</IconSpan>
      </TitleColumn>
    </CardIcon>
  );
};

export default IconBox;
