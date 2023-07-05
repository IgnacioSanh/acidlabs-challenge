import { Routes as Router, Route } from "react-router-dom";

import Login from "_screens/login/login";
import Jokes from "./jokes/jokes";
import JokesDetail from "./jokes/jokesDetail";
import { ProtectedRoute } from "_hoc/index";

export default function Routes() {
	return (
		<>
			<Router>
				<Route
					path="/"
					element={
						<ProtectedRoute>
							<Jokes />
						</ProtectedRoute>
					}
				/>
				<Route path="/login" element={<Login />} />
				<Route
					path="/jokes"
					element={
						<ProtectedRoute>
							<Jokes />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/jokes/:id"
					element={
						<ProtectedRoute>
							<JokesDetail />
						</ProtectedRoute>
					}
				/>
			</Router>
		</>
	);
}
