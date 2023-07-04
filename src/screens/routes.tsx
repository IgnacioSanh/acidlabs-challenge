import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "_screens/login/login";
import Home from "_screens/home/home";
import { screenNames } from "_types/routes";

const router = createBrowserRouter([
	{
		path: screenNames.LOGIN,
		element: <Login />,
	},
	{
		path: screenNames.HOME,
		element: <Home />,
	},
]);

export default function Routes() {
	return <RouterProvider router={router} />;
}
