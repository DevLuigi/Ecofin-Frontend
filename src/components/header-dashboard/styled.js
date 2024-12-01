import styled from "styled-components";

const Container = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: #FFF3F3;

    height: 10dvh;
    width: 100dvw;

    .logo-img {
        height: 10dvh;
        width: 10dvw;
    }

    div {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        
        margin-right: 3dvw;
    }
`;

export { Container }