import styled from "styled-components";

const ContainerRodape = styled.div`
  width: 100%;
  height: 20vh; /* Altura ajustada para o rodapé */
  background: linear-gradient(135deg, #5020AB, #7309CA); /* Gradiente diagonal */
  clip-path: polygon(0 59%, 100% 10%, 100% 100%, 0% 100%); /* Efeito diagonal */
  overflow: hidden; /* Garante que o conteúdo não saia do container */
  @media (max-width: 468px) {
    background:#7309CA;
  }
`;



const Diag = () => {
  return (
    <>
      <ContainerRodape>
    
      </ContainerRodape>
    </>
  );
};

export default Diag;
