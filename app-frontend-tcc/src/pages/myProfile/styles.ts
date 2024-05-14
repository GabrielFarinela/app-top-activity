import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    align-items: center;
    height: calc(100vh - 81px);
    min-height: 820px;
    width: 100vw;

    @media (max-width: 1139.5px){
      min-height: 1100px;
    }
`;

export const ContainerMain = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  gap: 50px;
  flex-wrap: wrap;
`;

export const HR = styled.hr`
  width: 2px; 
  height: 500px; 
  border: 0px;
  background-color: #8D8D99;

  @media (max-width: 1152px){
    display: none;
  }
`;

export const ContainerInputs = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center;
  gap: 40px; 
  width: 525px;
  margin: 0 10px;

  @media (max-width: 700px){
    width: 100%;
  }
`;

export const ContainerInput = styled.div`
  display: flex; 
  flex-direction: column; 
  gap: 30px; 
  width: 525px;

  @media (max-width: 700px){
    width: 100%;
  }
`;

export const ContainerButton = styled.div`
  width: 535px;

  @media (max-width: 700px){
    width: 90%;
  }
`;


