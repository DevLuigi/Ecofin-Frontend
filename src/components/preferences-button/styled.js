import styled from "styled-components";

const Container = styled.header`
    display: flex;
    justify-content: center;

    width: 5dvw;

    .lista {
        position: absolute;
        top: 10dvh;
        left: 68dvw;

        display: ${(props) => (props.isOpen ? "flex" : "none")};
        justify-content: start;

        background-color: #FFFFFF;
        border: 2px solid black;

        width: 12dvw;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 1dvh;
    }

    li {
        list-style-type: none;
        text-decoration: none;

        display: flex;
        justify-content: start;
    }
`;

export { Container }