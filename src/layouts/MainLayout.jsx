import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";
import { Wrapper } from "../style/global";

const MainLayout = () => {
	return (
		<Wrapper>
			<Header />
			<Outlet />
			<Footer />
		</Wrapper>
	);
};

export default MainLayout;
