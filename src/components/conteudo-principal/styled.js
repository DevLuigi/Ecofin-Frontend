import styled from "styled-components";

const Container = styled.section`
    display: flex;
    flex-direction: column;

    background-color: #FEF9F2;
    border: 2px solid rgb(0 0 0 / 5%);
    border-radius: 10px;

    height: 80dvh;
    width: 60dvw;

    margin-top: 2dvw;

    .title {
        width: 30%;
        margin: .8em .8em; 
    }

    hr {
        width: 100%;
        border-top: 1px solid #D9D9D9;  
        margin: 0px;
    }

    .content {
        margin: .8em .8em;
    }
`;

export { Container }