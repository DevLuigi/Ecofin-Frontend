import styled from "styled-components";

const Container = styled.header`

        display: flex;
        align-items: center;
        justify-content: center;

    .transactionButtons {
        display: flex;
        justify-content: center;
        align-items: center;

        margin-top: 5dvh;
        margin-left: 2.5dvw;
    }

    .header {
        display:flex;
        justify-content: space-between;
    }

    .closeBox {
        margin-top: 3dvh;
        margin-right: 1dvw;
    }

    .title {
        margin-left: 1dvw;
    }
 
    .transaction {
        height: 88dvh;
        width: 33dvw;

        position: absolute;
        top: 10dvh;
        left: 35dvw;

        display: ${(props) => (props.isOpen ? "flex" : "none")};
        justify-content: start;
        flex-direction: column;

        background-color: #FFFFFF;
        border-radius: 20px;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    }

    .title {
        width: 80%;
    }

    .container {
        display: flex;
        flex-direction: column;

        margin-left: 2dvw;
    }

`;

export { Container }