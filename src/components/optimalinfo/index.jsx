import styled from "styled-components";

const Title = styled.h1`
margin-top:8%;
font-size:1.5rem;
font-weight:600;
color: #1F1B5F;

@media (max-width: 468px) {
  font-size:2rem;
  text-align:center;
  width:100%;
}

`
const SubInfo = styled.p`
width:70%;
color:#68718B;
text-align:center;
@media (max-width: 468px) {
  font-size:0.9rem;
  text-align:justify;
  width:80%;
}
`
const ContainerInfo = styled.div`
margin-bottom:3%;
display:flex;
flex-direction:column;
align-items:center;
`

const OptimalInfo = ({title,subinfo}) => {
    return(
        <ContainerInfo>
            <Title>{title}</Title>
            <SubInfo>
                {subinfo}
            </SubInfo>
        </ContainerInfo>
    )
}

export default OptimalInfo;

