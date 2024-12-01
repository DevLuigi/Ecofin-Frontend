import styled from "styled-components";

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;

   height: 100dvh;
   width: 100dvw;

   background-color: #FFF3F3;

   font-family: sans-serif;

   .box {
      display: flex;
      flex-direction: row;
   }

   .texts {
      display: flex;
      flex-direction: column;
      width: 90%;
      margin-left: .5em;
   }

   .desc {
      width: 60%;
      color: rgb(0 0 0 / 55%);
   }

   .division {
      margin: .5em .5em;
   }

   .align-button {
      display: flex;
      align-items: center;
      justify-content: center;
   }
`;

export { Container };