import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface SidebarContainerProps {
   isopen: boolean;
}  

export const SidebarContainer = styled.aside<SidebarContainerProps>`
   position: fixed;
   top: 0;
   left: ${props => (props.isopen ? '0' : '-100%')};
   width: 400px;
   height: 100vh;
   background-color: #202024;
   transition: all 0.3s ease;
   z-index: 99;
   border-right: 1px solid #000;
   border-top: 1px solid #000;
   border-bottom: 1px solid #000;
   border-radius: 0 8px 8px 0;

   @media (max-width: 400px) {
      ${props => (props.isopen ? 'width: 100%' : 'width: 0%')};
   }
`;

export const HR = styled.hr`
   width: 100%;
   height: 1.5px;
   border: 0px;
   background-color: #121214;

`;

export const ButtonClose = styled.button`
   background-color: transparent;
   border: none;
   color: #00B37E;
   font-size: 20px;
   width: 30px;
   height: 30px;
   cursor: pointer;
   text-align: center;
   padding-bottom: 3px;
   border: 0.5px solid #000;
   border-radius: 50%;

   &:hover {
      opacity: 0.8;
   }
`;

export const SidebarContent = styled.div`
   display: flex;
   flex-direction: column;
   gap: 10px;
   padding: 20px;
   color: #fff;
`;

export const SidebarItem = styled(Link)`
   display: block;
   padding: 10px 0;
   text-decoration: none;
   color: #8D8D99;
   transition: color 0.3s ease;

   &:hover {
      opacity: 0.8;
      text-decoration: underline;
   }
`;

export const SidebarButton = styled.button`
   position: fixed;
   top: 15px;
   left: 20px;
   padding: 10px 20px;
   background-color: transparent;
   color: #fff;
   border: none;
   cursor: pointer;

   &:hover {
      opacity: 0.8;
   }
`;
