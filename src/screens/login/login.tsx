import { Box, Image, Button, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import avatar from "_assets/avatar.png";
import { COOKIE_TOKEN_NAME } from "_types/auth";

export default function Login() {
	const navigate = useNavigate();
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [_, setCookie] = useCookies();

	function onPressLogin() {
		setCookie(COOKIE_TOKEN_NAME, "018237-token");
		navigate("/jokes");
	}

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			height="80vh"
		>
			<Box
				width={{ base: "full", md: "400px" }}
				p={8}
				borderWidth={1}
				borderRadius={8}
				boxShadow="lg"
				display="flex"
				flexDirection="column"
				alignItems="center"
				gap={4}
			>
				<Heading mb={4} textAlign="center">
					Login
				</Heading>
				<Image
					borderRadius="full"
					boxSize="150px"
					src={avatar}
					mb={4}
					alt="Ignacio Sanhueza avatar"
				/>
				<Text textAlign="center">
					This app was developed by Ignacio Sanhueza as part of a
					Logicea + Acid Labs challenge
				</Text>
				<Button
					type="button"
					colorScheme="blue"
					width="100%"
					onClick={onPressLogin}
				>
					Sign In
				</Button>
			</Box>
		</Box>
	);
}
