import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const ContainerBlock = styled.div`
   margin: 30px;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
   gap: 20px;
   width: 95vw;
   height: max-content;
`;

export const Card = styled.div`
  width: 25%;
  min-width: 370px;
  height: 300px;
  background-color: #202024;
  border: 1px solid #000;
  border-radius: 5px;
  cursor: pointer;

  &:hover{
  }

  @media (max-width: 370px) {
   min-width: 100%;
   width: 100%;
  }
`;