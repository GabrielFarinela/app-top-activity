import React, { useState } from 'react';
import { ButtonClose, HR, SidebarButton, SidebarContainer, SidebarContent, SidebarItem } from './styles';

const Menu: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen((prevState) => !prevState);
	};

	return (
		<>
			<SidebarButton onClick={toggleSidebar}>
				<img src="./src/assets/menu.svg" alt="" />
			</SidebarButton>
			<SidebarContainer isOpen={isOpen}>
				<div style={{ 
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					margin: "20px 20px 0 20px"
				}}>
					<span style={{ userSelect: "none", color: "#00B37E" }}>Top Activity</span>
					<ButtonClose onClick={() => setIsOpen(!isOpen)}>x</ButtonClose>
				</div>
				<SidebarContent>
					<HR />
					<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
						<img style={{ width: "30px", height: "auto" }} src="./src/assets/home.svg" alt="" />
						<SidebarItem to="/">Página Inicial</SidebarItem>
					</div>
					<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
						<img style={{ width: "30px", height: "auto" }} src="./src/assets/favorite.svg" alt="" />
						<SidebarItem to="/favorites">Favoritos</SidebarItem>
					</div>
					<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
						<img style={{ width: "30px", height: "auto" }} src="./src/assets/profile.svg" alt="" />
						<SidebarItem to="/my-profile">Meu perfil</SidebarItem>
					</div>
				</SidebarContent>
			</SidebarContainer>
		</>
	);
};

export default Menu;
