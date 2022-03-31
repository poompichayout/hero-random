import React from "react";
import { PrimaryButton } from "../../style/global";
import {
	Navbar,
	LeftMenu,
	RightMenu,
	LogoWrapper,
	MenuList,
	MenuItem,
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
					<MenuItem>About us</MenuItem>
					<MenuItem>Features</MenuItem>
					<MenuItem>Login</MenuItem>
					<MenuItem>
						<PrimaryButton>Sign Up</PrimaryButton>
					</MenuItem>
				</MenuList>
			</RightMenu>
		</Navbar>
	);
};

export default Header;
