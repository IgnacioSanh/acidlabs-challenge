import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

import Login from "_screens/login/login";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider>
			<Login />
		</ChakraProvider>
	</React.StrictMode>
);
