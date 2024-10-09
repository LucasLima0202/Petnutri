import styled from "styled-components";

const Title = styled.h2`
color:#1F1B5F;
font-size:2rem;
`
const SubInfo = styled.p`
width:70%;
color:#68718B;
text-align:center;
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

