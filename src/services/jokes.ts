import axios from "axios";

import { Joke } from "_types/jokes";

const BASE_URL = "https://retoolapi.dev/zu9TVE/jokes";

export async function getJokes(page = 1, limit = 10): Promise<Joke[]> {
	const url = `${BASE_URL}/?_page=${page}&_limit=${limit}`;
	const jokes = await axios.get<Joke[]>(url);
	return jokes.data;
}

export async function getJokeById(id: string): Promise<Joke> {
	const url = `${BASE_URL}/${id}`;
	const joke = await axios.get<Joke>(url);
	return joke.data;
}
