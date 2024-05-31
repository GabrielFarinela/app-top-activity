import styled from 'styled-components';

interface ContainerProps {
   minHeight?: string;
}

export const Container = styled.div<ContainerProps>`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: flex-end;

   position: relative;

   width: 100vw;
   height: 100vh;
`;

export const ImageBottomRight = styled.div`
   position: absolute; 
   bottom: 0; 
   right: 700px;

   @media (max-width: 1050px) {
      display: none;
   }

   @media (max-height: 890px) {
      display: none;
   }
`;

export const ImageTopLeft = styled.div`
   position: absolute; 
   top: 81px; 
   left: 0;

   @media (max-width: 1050px) {
      display: none;
   }

   @media (max-height: 890px) {
      display: none;
   }  
`;

export const Header = styled.div`
   background-color: #202024; 
   width: 100vw;
   min-height: 80px;
   height: 5%;
   display: flex; 
   gap: 5px;
   flex-direction: column;
   justify-content: center; 
   align-content: center; 
   align-items: center; 
   text-align: center ;
   border-bottom: solid 1px #000;
`;

export const ContainerForm = styled.div`
   position: relative;
   width: 700px;
   min-height: 800px;
   height: 85%;

   display: flex;
   flex-direction: column;
   justify-content: center;
   gap: 100px;
   border-radius: 8px 0 0 0;
   border: solid 1px #000;

   padding: 20px;
   box-sizing: border-box;

   background-color: #202024;

   @media (max-width: 700px) {
      width: 100%;
   }
`;

export const Form = styled.form`
   display: flex;
   flex-direction: column;
   gap: 100px;
`;