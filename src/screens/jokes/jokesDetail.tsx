import { useState, useEffect } from "react";
import {
	Text,
	Container,
	Spinner,
	Divider,
	Box,
	Button,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

import { getJokeById } from "_services/jokes";
import { Joke } from "_types/jokes";
import { formatDate } from "_utils/dates";

export default function JokesDetail() {
	const { id } = useParams();
	const navigate = useNavigate();

	const [joke, setJoke] = useState<Joke>();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		(async () => {
			if (id) {
				const response = await getJokeById(id);
				setJoke(response);
			}
		})();
		setLoading(false);
	}, [id]);

	return (
		<Box>
			<Button onClick={() => navigate(-1)}>{"< Go back"}</Button>
			<Container centerContent borderWidth={1} borderRadius={5} p={2}>
				{loading ? <Spinner size="xl" /> : null}
				{joke ? (
					<>
						<Text fontSize="3xl">{joke?.title}</Text>
						<Text>{joke?.body}</Text>
						<Divider mt={10} mb={2} />
						<Text>Posted by {joke?.author}</Text>
						<Text>Date: {formatDate(joke?.createdAt)}</Text>
						<Text>Views: {joke?.views}</Text>
					</>
				) : null}
			</Container>
		</Box>
	);
}
