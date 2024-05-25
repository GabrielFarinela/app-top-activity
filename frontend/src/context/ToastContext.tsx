import React, { createContext, useContext, useState, ReactNode } from 'react';
import Toast from './toast';

interface ToastContextType {
  showToast: (message: string, color: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [toast, setToast] = useState<{ message: string, color: string } | null>(null);

	const showToast = (message: string, color: string) => {
		setToast({ message, color });
		setTimeout(() => {
			setToast(null);
		}, 4000);
	};

	return (
		<ToastContext.Provider value={{ showToast }}>
			{children}
			{toast && <Toast message={toast.message} color={toast.color} />}
		</ToastContext.Provider>
	);
};

export const useToast = () => {
	const context = useContext(ToastContext);
	if (!context) {
		throw new Error('useToast must be used within a ToastProvider');
	}
	return context;
};

export default ToastProvider;
