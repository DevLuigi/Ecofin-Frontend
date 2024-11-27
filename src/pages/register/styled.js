import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #fffdf9;

    width: 98dvw;

    img {
        margin-top: 1em;
    }

    .logo-img {
        width: 8em;
    }

    .man-img {
        width: 5em;
    }

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
`;

export { Container };