import styled from "styled-components"

const BackgroundBanner = styled.div`

`

const ContainerBig = styled.section`

`

const ContainerInfo = styled.article`

`
const Title = styled.h2`

`
const SubTitle = styled.h4`

`
const SectionButton = styled.div`

`


const ContainerSvg = styled.div`

`



const Banner = () => {
    return (
        <BackgroundBanner>
            <ContainerBig>
                <ContainerInfo>
                    <Title>Communication solutions tailored for you</Title>
                    <SubTitle>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis et justo a pellentesque. Aliquam sagittis mollis libero eu molestie. Cras pellentesque condimentum placerat.
                    </SubTitle>
                    <SectionButton>
            
                    </SectionButton>
                </ContainerInfo>
                <ContainerSvg>
                <img src="" alt="" />
                </ContainerSvg>
            </ContainerBig>
        </BackgroundBanner>

    )
}

export default Banner