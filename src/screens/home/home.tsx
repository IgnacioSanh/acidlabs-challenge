import { Container } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

export default function Home() {
	return (
		<Container>
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
					<Tr>
						<Td>Joke title</Td>
						<Td>some@email.com</Td>
						<Td>23 Feb 2022</Td>
						<Td>65</Td>
					</Tr>
				</Tbody>
			</Table>
		</Container>
	);
}
