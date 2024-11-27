import styled from "styled-components";

const Container = styled.div`
   height: 100dvh;
   width: 100dvw;

   background-color: #FFF3F3;

   font-family: sans-serif;

   .buttons {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
   }

   .buttons Button {
      border-bottom: 2px solid #D9D9D9;
   }

   .createCategoryButton {
      display: flex;
      justify-content: end;
      
      margin-right: 4dvw;
   }

   .categoryList {
      display: flex;
      flex-direction: column;
   }
`;

export { Container };