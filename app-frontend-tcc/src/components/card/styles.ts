import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: calc(100vh - 81px);
   min-height: 700px;
   width: 100vw;
`;

export const Row = styled.div`
   display: flex;
   align-items: center;
   gap: 50px;
   width: 90%;
   height: 100%;
`;

interface BoxProps {
   transparent: string;
   width: string;
   height: string;
   position: string;
   border: string;
   styleInline?: string;
}

export const Box = styled.div<BoxProps>`
   border: ${({ border }) => (border)};
   position: ${({ position }) => (position)};
   background-color: ${({ transparent }) => (transparent)};
   width: ${({ width }) => width};
   height: ${({ height }) => height};
   border-radius: 8px;
   min-height: 300px;
   ${({ styleInline }) => styleInline};
`;

interface CustomDivProps {
   positionScreen: string;
 }

export const ButtonNext = styled.div<CustomDivProps>`
   border: 1px solid #000;
   cursor: pointer;
   border-radius: 8px;
   position: absolute;
   background-color: #202024;
   width: 60px;
   height: 60px;
   ${({ positionScreen }) => (positionScreen)};

   &:hover {
      opacity: 0.5;
   }

   @media (max-width: 900px) {
      display: none;
   }
`;
