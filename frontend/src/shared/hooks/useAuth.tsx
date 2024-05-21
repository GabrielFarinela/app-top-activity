import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export function useAuthentication() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const userEmail = Cookies.get('user_email');
		const loggedIn = userEmail && userEmail.length > 0 ? true : false; 
		setIsLoggedIn(loggedIn);
	}, []);

	return isLoggedIn;
}
