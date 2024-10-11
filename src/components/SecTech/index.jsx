import Button from "../button";
import styled, { css } from 'styled-components';

const GradientOutPurpleBTN = css`
  background-image: linear-gradient(to right, #FFFFFF, #CD9BFF, #FFFFFF);
  box-shadow: 0 4px 15px 0 #FFFFFF;
`;

const ContainerBackground = styled.div`
background-image: url("/public/assets/backgroundTech.svg");
height:90vh;
background-repeat:no-repeat;
background-size:cover;
background-position: center;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`

const Title = styled.h1`
  margin: 0;
  width:50%;
  text-align:center;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom:2%;
  color: #ffffff;
  @media (max-width: 468px) {
    font-size: 1.8rem;
    width:90%;
  }
`;
const Label = styled.p`
  font-size: 1rem;
  margin-bottom:4%;
  width: 75%;  
  text-align:center;
  color:#fcfcfc;
  @media (max-width: 468px) {
  font-size: 0.9rem;
  text-align:center;
  width:90%;
}
`;

const SecTech = () => {
    return(
        <ContainerBackground>
            <Title>
                Maximize your online presence with our digital strategy services
            </Title>
            <Label>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in metus non est malesuada faucibus. Fusce euismod dolor et massa eleifend, at viverra quam pulvinar. Ut tempor lacus nec dui sagittis elementum. Donec purus velit, aliquam tincidunt luctus id.
            </Label>
            <Button
            title="Take a look"
            gradient={GradientOutPurpleBTN}
            color="#7508CC"
            />
        </ContainerBackground>
    )
}


export default SecTech;

