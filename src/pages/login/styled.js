import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100dvh;
    width: 100dvw;

    hr {
        width: 90%;
        border: 1.5px solid #D9D9D9;
    }    

    p {
        font-weight: bold;
    }

    span {
        color: #FFB2B2;
        text-decoration: underline;
    }

    span:hover {
        cursor: pointer;
    }
`

export { Container }