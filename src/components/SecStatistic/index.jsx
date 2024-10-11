import styled from "styled-components";
import GraphSvg from "/public/assets/contentStastic.svg"


const ContainerGiant = styled.div`
display:flex;
width:90%;
margin-top:5%;
align-items:center;
justify-content:center;
flex-direction:row;
@media (max-width: 468px) {
    flex-direction:column;
}
`

const ContainerCenter = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;

`

const ContainerInfo = styled.div`
display:flex;
width:100%;
flex-direction:column;
@media (max-width: 468px) {
    text-align:center;
    align-items:center;
}
`

const ContainerCardBox = styled.div`
display:flex;
flex-direction:row;
gap:10%;
justify-content:flex-start;
align-items:flex-start;
@media (max-width: 468px) {
    flex-direction:column;
    gap:20%;
}
`

const ContainerSvg = styled.div`
display:flex;
align-items:center;
justify-content:center;
text-align:center;
padding-left:7%;
svg{
    width:35vw;
    text-align:center;
    justify-content:center;
}

@media (max-width: 468px) {
    svg{
        width:65vw;
    }
}
`

const Box = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin:0;
padding:1%;
width:8rem;
height:8rem;
justify-content:center;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;  flex-direction: column;
@media (max-width: 468px) {
    width:45vw;
    height:25vh;
    box-shadow: rgba(66, 71, 75, 0.2) 0px 8px 24px;  flex-direction: column;
    margin-bottom:5%;
    margin-top:5%;
}
`

const Title = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom:2%;
  color: #001230;
  @media (max-width: 468px) {
    font-size: 1.8rem;
    margin-top:8%;
    width:95%;
  }
`;
const Label = styled.p`
  font-size: 1rem;
  margin-bottom:4%;
  width: 90%;  
  text-align:left;
  color:#475467;
  @media (max-width: 468px) {
  font-size: 0.9rem;
  text-align:center;
  margin-bottom:9%;
}
`;

const TitleBox = styled.h2`
font-size:2.4rem;
padding-top:5%;
margin:0;
color: #001230;
@media (max-width: 468px) {
    font-size:1.9rem;
}
`

const LabelBox = styled.p`
font-size:1rem;
width:80%;
text-align:center;
font-weight:500;
@media (max-width: 468px) {
    font-size:0.9rem;
}
`


const SecStatistic = () => {
    return(
        <>
        <ContainerCenter>
                <ContainerGiant>
                    <ContainerInfo>
                        <Title>Continuous Monitoring & Adjustment</Title>
                        <Label>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis et justo a pellentesque. </Label>
                        <ContainerCardBox>
                        <Box>
                                <TitleBox>
                                40+
                                </TitleBox>
                                <LabelBox>
                                Integrations
                                </LabelBox>
                            </Box>
                            <Box>
                                <TitleBox>
                                600%
                                </TitleBox>
                                <LabelBox>
                                Other Infomation       
                                </LabelBox>
                            </Box>
                            <Box>
                                <TitleBox>
                                4k+
                                </TitleBox>
                                <LabelBox>
                                Other Infomation  
                                </LabelBox>
                            </Box>
                        </ContainerCardBox>
                    </ContainerInfo>
                    <ContainerSvg>
                        <GraphSvg/>
                    </ContainerSvg>
                </ContainerGiant>
            </ContainerCenter>
        </>
    )
}

export default SecStatistic;