import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import NotFound from './pages/notFound';
import Layout from './shared/layout';

const root = ReactDOM.createRoot(document.getElementById('root')!);

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/signIn', element: <SignIn /> },
			{ path: '/signUp', element: <SignUp /> },
		],
	},
	{
		path: '*',
		element: <NotFound />,
	},
]);
	
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
