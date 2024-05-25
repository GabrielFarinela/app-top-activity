import React from 'react';
import styled from 'styled-components';

interface ToastProps {
  message: string;
  color: string;
}

const ToastContainer = styled.div<{ color: string }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${({ color }) => color};
  color: #000;
  height: 30px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  padding: 16px;
  border-radius: 8px;
  opacity: 0.6;
  z-index: 1000;
  transition: opacity 0.5s ease-in-out;
`;

const Toast: React.FC<ToastProps> = ({ message, color }) => {
	return (
		<ToastContainer color={color}>
			{message}
		</ToastContainer>
	);
};

export default Toast;
