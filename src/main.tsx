import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import Routes from "_screens/routes";
import Navbar from "_components/navbar/navbar";
import { CookiesProvider } from "react-cookie";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<ChakraProvider>
		<CookiesProvider>
			<BrowserRouter>
				<Navbar />
				<Routes />
			</BrowserRouter>
		</CookiesProvider>
	</ChakraProvider>
);
