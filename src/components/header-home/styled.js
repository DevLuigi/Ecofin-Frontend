import styled from "styled-components";

const Container = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background-color: #FFF3F3;

    height: 10dvh;
    width: 100dvw;

    img {
        height: 10dvh;
        width: 10dvw;
        margin-left: 3dvw;
    }

    div {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        
        margin-right: 3dvw;
    }
`;

export { Container }