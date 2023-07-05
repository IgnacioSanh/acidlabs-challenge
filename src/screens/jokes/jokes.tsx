import { useEffect, useState } from "react";
import {
	Box,
	Button,
	ButtonGroup,	
	Text,
	Select,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import { getJokes } from "_services/jokes";
import { Joke } from "_types/jokes";
import { getViewsColor } from "_utils/jokes";
import { formatDate } from "_utils/dates";

export default function Jokes() {
	const [jokes, setJokes] = useState<Joke[]>([]);
	const [limit, setLimit] = useState(5);
	const [currentPage, setCurrentPage] = useState(1);
	const [maxPage, setMaxPage] = useState(0);

	useEffect(() => {
		(async () => {
			const response = await getJokes(currentPage, limit);
			if (response.length === 0 && currentPage > 1) {
				setMaxPage(currentPage - 1);
				setCurrentPage((prev) => prev - 1);
			}
			setJokes(response);
		})();
	}, [currentPage, limit]);

	return (
		<Box
			display="flex"
			flexDirection="column"
			alignItems="center"
			mx={20}
			mb={10}
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
					{jokes.map(({ id, title, author, createdAt, views }) => (
						<Tr key={id}>
							<Td>
								<Link to={`/jokes/${id}`}>{title}</Link>
							</Td>
							<Td>{author}</Td>
							<Td>{formatDate(createdAt)}</Td>
							<Td>
								<Text color={getViewsColor(views)}>
									{views}
								</Text>
							</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
			<Box
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				mt={4}
				width="full"
			>
				<ButtonGroup display="flex" alignItems="center">
					<Button
						leftIcon={<ChevronLeftIcon />}
						onClick={() => {
							if (currentPage > 1) {
								setCurrentPage((prev) => prev - 1);
							}
						}}
						isDisabled={currentPage === 1}
					>
						Previous
					</Button>
					<Button
						rightIcon={<ChevronRightIcon />}
						onClick={() => setCurrentPage((prev) => prev + 1)}
						isDisabled={maxPage === currentPage}
					>
						Next
					</Button>
					<Text ml={4}>Page {currentPage}</Text>
				</ButtonGroup>
				<Flex gap={3} alignItems="center">
					<Text>Displaying</Text>
					<Select
						onChange={(e) => setLimit(parseInt(e.target.value))}
					>
						<option value={5} selected>
							5 per page
						</option>
						<option value={10}>10 per page</option>
					</Select>
				</Flex>
			</Box>
		</Box>
	);
}
