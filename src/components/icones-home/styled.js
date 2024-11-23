import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    width: ${(props) => `${props?.style?.myWidth}dvw`};

    img {
        height: ${(props) => `${props?.style?.myImageSize}dvh`};
        width: ${(props) => `${props?.style?.myImageSize}dvw`};
        margin-right: .5em;
    }
`

export { Container }