import styled from "styled-components";

export const Description = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  color: white;
  height: 7.6rem;
  line-height: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ContainerButton = styled.div`
  margin-bottom: 20px;
  width: 40%;
`;

export const ContainerImage = styled.div`
  display: flex; 
  gap: 10px;

  &::-webkit-scrollbar {
    width: 12px;
    height: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: #000;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;