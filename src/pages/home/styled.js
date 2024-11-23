import styled from "styled-components";

const Container = styled.div`
   height: 100dvh;
   width: 100dvw;

   background-color: #FFF3F3;

   font-family: sans-serif;

   section {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      height: 83dvh;
      width: 83dvw;
      padding: 1em 5em;
   }

   .infos-div {
      width: 40dvw;
   }

   .image-div {
      display: flex;
      justify-content: center;
      align-items: center;
   }
   
   h1 {
      font-size: 8dvh;
      margin: .5em 0em;
   }

   .highlight {
      color: #FFB2B2;
   }

   .icones-text {
      display: flex;
      flex-direction: row;
      width: 30dvw;
      margin: 1em 0em;
   }
`;

export { Container };