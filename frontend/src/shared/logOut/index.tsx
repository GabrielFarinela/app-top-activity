import React from 'react';
import { Logout } from './styles';
import Cookies from 'js-cookie';

const LogOut: React.FC = () => {
	return <a 
		onClick={() => {
			Cookies.remove('user_email');
			Cookies.remove('user_senha');
		}} 
		href="/signIn">
		<Logout>Sair</Logout>
	</a>;
};

export default LogOut;