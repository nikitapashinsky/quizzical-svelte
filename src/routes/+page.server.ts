import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const res = await fetch(`https://opentdb.com/api.php?amount=6&type=multiple`);
	const data = await res.json();
	const questions = data.results;

	if (res.ok) {
		return { questions };
	} else {
		throw new Error(data);
	}
}) satisfies PageServerLoad;
