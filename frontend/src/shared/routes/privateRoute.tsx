import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

interface PrivateRouteProps {
  path: string;
  element: React.ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
	const userEmail = Cookies.get('user_email');
	const userSenha = Cookies.get('user_senha');

	console.log(userEmail);

	if ((!userEmail || userEmail.length === 0) && (!userSenha || userSenha.length === 0)) {
		return <Navigate to="/signIn" />;
	}

	return element;
};
