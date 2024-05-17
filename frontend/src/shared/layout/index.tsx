import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../menu';
import LogOut from '../logOut';

const Layout: React.FC = () => {
	return (
		<div>
			<Menu />
			<LogOut/>
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default Layout;
