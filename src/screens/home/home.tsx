import { useEffect, useState } from "react";
import {
	Box,
	Button,
	ButtonGroup,
	Container,
	Text,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
} from "@chakra-ui/react";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import { getJokes } from "_services/jokes";
import { Joke } from "_types/jokes";
import { getViewsColor } from "_utils/jokes";

export default function Home() {
	async function fetchJokes() {
		const response = await getJokes();
		setJokes(response);
	}

	const [jokes, setJokes] = useState<Joke[]>([]);

	useEffect(() => {
		fetchJokes();
	}, []);

	return (
		<>
			<Container
				display="flex"
				flexDirection="column"
				alignItems="center"
			>
				<Table>
					<Thead>
						<Tr>
							<Th>Title</Th>
							<Th>Author</Th>
							<Th>Created Date</Th>
							<Th>Views</Th>
						</Tr>
					</Thead>
					<Tbody>
						{jokes.map(
							({ id, title, author, createdAt, views }) => (
								<Tr key={id}>
									<Td>{title}</Td>
									<Td>{author}</Td>
									<Td>{createdAt}</Td>
									<Td>
										<Text color={getViewsColor(views)}>
											{views}
										</Text>
									</Td>
								</Tr>
							)
						)}
					</Tbody>
				</Table>
				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					mt={4}
				>
					<ButtonGroup>
						<Button
							leftIcon={<ChevronLeftIcon />}
							onClick={() => console.log("prev")}
							disabled={false}
						>
							Previous
						</Button>
						<Button
							rightIcon={<ChevronRightIcon />}
							onClick={() => console.log("next")}
							disabled={false}
						>
							Next
						</Button>
					</ButtonGroup>
					<Text ml={4}>Page 0 of 0</Text>
				</Box>
			</Container>
		</>
	);
}
