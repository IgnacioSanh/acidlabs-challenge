import {
	Box,
	Flex,
	Spacer,
	Button,
	Image,
	IconButton,
	useColorMode,
	useColorModeValue,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useCookies } from "react-cookie";

import Logo from "_assets/avatar.png";
import { COOKIE_TOKEN_NAME } from "_types/auth";

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const bgColor = useColorModeValue("gray.100", "gray.900");
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [cookie, _, removeCookie] = useCookies([COOKIE_TOKEN_NAME]);

	function handleLogButtonPress() {
		if (cookie?.TOKEN) {
			removeCookie(COOKIE_TOKEN_NAME);
		}
	}

	if (!cookie?.TOKEN) {
		return null;
	}

	return (
		<Box bg={bgColor} py={4} px={8} mb={4} width="full">
			<Flex alignItems="center">
				<Box>
					<Image
						src={Logo}
						alt="Logo"
						height={10}
						width={10}
						borderRadius="full"
					/>
				</Box>
				<Spacer />
				<Button
					variant="ghost"
					colorScheme="teal"
					mr={4}
					onClick={handleLogButtonPress}
				>
					{cookie?.TOKEN ? "Log out" : "Log in"}
				</Button>
				<IconButton
					icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
					variant="ghost"
					colorScheme="teal"
					aria-label="toggle-theme"
					onClick={toggleColorMode}
				/>
			</Flex>
		</Box>
	);
};

export default Navbar;
