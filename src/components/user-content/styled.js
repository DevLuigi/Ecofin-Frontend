import styled from "styled-components";

const Container = styled.header`

        display: flex;
        align-items: center;
        justify-content: center;

    .background {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        background-color: #FEF9F2;
        border: 2px solid #777777;
        border-radius: 10px;

        height: 80dvh;
        width: 60dvw;

        margin-top: 2dvw;
    }

    .image {
        display: flex;
        justify-content: center;
    }

    .userDetails {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

`;

export { Container }