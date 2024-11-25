import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;

    height: ${(props) => `${props?.style?.myHeight}dvh`};
    width: ${(props) => `${props?.style?.myWidth}dvw`};   

    margin: ${(props) => props?.style?.myMargin};

    p {
        color: ${(props) => props?.style?.myColor};
        margin: 0px;
    }

    input {
        height: ${(props) => `${props?.style?.myHeight}dvh`};
        width: ${(props) => `${props?.style?.myWidth}dvw`}; 

        margin-top: .5em;
        padding: 0em .5em;

        border: 1px solid rgba(0, 0, 0, 0.3);
        border-radius: .5em;
    }
`

export { Container };