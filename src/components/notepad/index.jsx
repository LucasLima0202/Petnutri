import styled from "styled-components"

const BackgroundBanner = styled.div`
background-image: ${props => `url(${props.$backgroundImage})`};
flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 60vh;
    justify-content:center;
    margin: 0;
    border-radius:12px;
    padding:0;
    max-width: 90%;
    background-size: cover;
    margin-top:2%;
margin-bottom:2%;
`

const ContainerCenter = styled.div`
display:flex;
align-items:center;
justify-content:center;


@media (max-width: 468px) {
margin-top:10%;
margin-bottom:10%;
}
`
const Text = styled.h1`
margin:0;
font-size:1.8rem;
line-height:60px;
text-align:left;
padding:4%;
font-weight:500;
color: #ffffff;

@media (max-width: 468px) {
  font-size:1.5rem;
  text-align:center;
  width:100%;

}

`
const NotepadWarning = ({backgroundImage,text}) => {
    return(
        <ContainerCenter>
            <BackgroundBanner $backgroundImage={backgroundImage}>
                <Text>
                    {text}
                </Text>
            </BackgroundBanner>
        </ContainerCenter>
    )
}
export default NotepadWarning