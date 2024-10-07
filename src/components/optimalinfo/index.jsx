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


const OptimalInfo = ({title,subinfo}) => {
    return(
        <>
            <Title>{title}</Title>
            <SubInfo>
                {subinfo}
            </SubInfo>
        </>
    )
}

export default OptimalInfo;

