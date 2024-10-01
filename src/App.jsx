import styled, { css } from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import Navbar from './components/navbar';
import Button from './components/button';

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
  background-image: linear-gradient(to right, #FFFFFF, #6A68AF, #FFFFFF, #6A68AF);
  box-shadow: 0 4px 15px 0 #FFFFFF;
`;

const GradientOutPurple = css`
  background-image: linear-gradient(to right, #FFFFFF, #CD9BFF, #FFFFFF, #CD9BFF);
  box-shadow: 0 4px 15px 0 #FFFFFF;
`;

function App() {
  return (
    <BackgroundGradient>
      <GlobalStyle />
      <>
        <Navbar />
        <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
        <Button 
          title="Button 1"
          gradient={GradientFillPurple}
        />
        <Button 
          title="Button 2"
          gradient={GradientFillBlue}
        />
        <Button 
          title="Button 3"
          gradient={GradientOutBlue}
        />
        <Button 
          title="Button 4"
          gradient={GradientOutPurple}
        />
      </>
    </BackgroundGradient>
  );
}

export default App;
