import styled from "styled-components";
import WaveSvg from "/public/assets/wave.svg";

const ContainerSvg = styled.div`
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    margin: 0; 
    padding:0;
    z-index: 0;
        svg {

        width: 100%;
        margin: 0;
        padding:0;
        display: block;
    }
`;

const Wave = () => {
    return (
        <ContainerSvg>
            <WaveSvg />
        </ContainerSvg>
    );
};

export default Wave;
