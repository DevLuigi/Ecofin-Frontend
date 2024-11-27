import styled from "styled-components";

const Container = styled.header`

        display: flex;
        align-items: center;
        justify-content: center;

    .background {
        background-color: #FEF9F2;
        border: 2px solid #777777;
        border-radius: 10px;

        height: 80dvh;
        width: 60dvw;

        margin-top: 2dvw;
    }
    
    img {
        margin-left: 3dvw;
    }

    .title {
        width: 30%;

        margin-left: 1dvw;
        margin-top: 1dvw;
    }

    .contentDivision {
        width: 90%;

        margin-left: 1dvw;
        
        border-top: 2px solid #D9D9D9;

        color: transparent; /*Encontrar uma forma melhor para dividir o titulo do conteudo*/
    }

    .content {
        margin-top: 1dvw;
        margin-left: 1dvw;

    }


`;

export { Container }