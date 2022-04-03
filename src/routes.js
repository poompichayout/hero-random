import MainLayout from "./layouts/MainLayout";
import { HomePage, HeroInfoPage } from "./pages";

const routes = [
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{ path: "/", element: <HomePage /> },
			{ path: "/hero/:id", element: <HeroInfoPage /> },
		],
	},
];

export default routes;
