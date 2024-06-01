import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import NotFound from './pages/notFound';
import Layout from './shared/layout';
import MyProfile from './pages/myProfile';
import { PrivateRoute } from './shared/routes/privateRoute';
import { PublicRoute } from './shared/routes/publicRoute';
import ToastProvider from './context/ToastContext';
import Favorites from './pages/favorites';

const root = ReactDOM.createRoot(document.getElementById('root')!);

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ 
				path: '/signIn', 
				element: <PublicRoute path="/signIn" element={<SignIn />} />, 
			},
			{ 
				path: '/signUp', 
				element: <PublicRoute path="/signUp" element={<SignUp />} />, 
			},
			{ 
				path: '/', 
				element: <PrivateRoute path="/" element={<Home />} />, 
			},
			{
				path: '/my-profile',
				element: <PrivateRoute path="/my-profile" element={<MyProfile />} />,
			},
			{
				path: '/favorites',
				element: <PrivateRoute path="/favorites" element={<Favorites />} />,
			},
		],
	},
	{
		path: '*',
		element: <NotFound />,
	},
]);

root.render(
	<React.StrictMode>
		<ToastProvider>
			<RouterProvider router={router} />
		</ToastProvider>
	</React.StrictMode>
);
