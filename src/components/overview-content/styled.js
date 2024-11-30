import styled from "styled-components";

const Container = styled.header`

        display: flex;
        align-items: center;
        justify-content: center;

    .acessoRapido {
        display: flex;

        background-color: #FEF9F2;
        border: 2px solid #777777;
        border-radius: 10px;

        height: 25dvh;
        width: 60dvw;

        margin-top: 2dvw;
    }

    .userReports {
        width: 60%;

        margin-left: 1dvw;
        margin-right: 1dvw;
        margin-top: 1dvw;
    }

    .reports {
        display: flex;
        justify-content: space-between;
    }

    div .income{
        display:flex;
        justify-content: center;

        border: 2px solid black;
        border-radius: 5px;
    }

    div .expense{
        display:flex;
        justify-content: center;

        border: 2px solid black;
        border-radius: 5px;
    }

    .income {
        color: #5BFF6E;
    }

    .expense {
        color: #FF1010;
    }

    .quickAcess {
        border-left: 2px solid #E9E9E9;
    }

    .quickAcess h3 {
        margin-left: 2dvh;
    }

    .transactionButtons {
        display: flex;
        justify-content: center;
        align-items: center;

        margin-top: 5dvh;
        margin-left: 2.5dvw;
    }


`;

export { Container }