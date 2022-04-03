import styled from 'styled-components';

export const Navbar = styled.div`
	display: flex;
	padding: 0 50px;

	@media only screen and (max-width: 768px) {
		padding: 0 10px;
	}
`;

export const LeftMenu = styled.div`
	font-weight: 700;
	display: flex;
	align-items: center;
`;

export const RightMenu = styled.div`
	margin-left: auto;
`;

export const LogoWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const MenuList = styled.ul`
	display: flex;
	align-items: center;
	list-style-type: none;

	@media only screen and (max-width: 768px) {
		display: none;
	}
`;

export const MenuItem = styled.li`
	margin: 0 25px;
`;

export const HamburgerMenu = styled.i`
	display: none;
	width: 50px;
	height: 50px;

	@media only screen and (max-width: 768px) {
		display: flex;
		align-items: center;
	}
`;