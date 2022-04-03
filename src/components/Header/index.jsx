import React from "react";
import { PrimaryButton } from "../../style/global";
import {
	Navbar,
	LeftMenu,
	RightMenu,
	LogoWrapper,
	MenuList,
	MenuItem,
	HamburgerMenu
} from "./style";

import logo from "../../images/random.png";

const Header = () => {
	return (
		<Navbar>
			<LeftMenu>
				<LogoWrapper>
					<img src={logo} alt="" width="40" height="40" />
					<span style={{ fontSize: "18px" }}>Eieirandom</span>
				</LogoWrapper>
			</LeftMenu>
			<RightMenu>
				<MenuList>
					<MenuItem>Home</MenuItem>
					<MenuItem>
						<PrimaryButton>Go random</PrimaryButton>
					</MenuItem>
				</MenuList>
				<HamburgerMenu className="fa fa-bars"></HamburgerMenu>
			</RightMenu>
		</Navbar>
	);
};

export default Header;
