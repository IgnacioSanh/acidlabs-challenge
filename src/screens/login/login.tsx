import { Box, Image, Button, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import avatar from "_assets/avatar.png";
import { screenNames } from "_types/routes";

export default function Login() {
	const navigate = useNavigate();

	function onPressLogin() {
		navigate(screenNames.HOME);
	}

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			height="100vh"
		>
			<Box
				width="400px"
				p={8}
				borderWidth={1}
				borderRadius={8}
				boxShadow="lg"
				bg="brand.50"
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
					This app was developed by Ignacio Sanhueza as part of a Acid
					Labs challenge
				</Text>
				<Button
					type="submit"
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
