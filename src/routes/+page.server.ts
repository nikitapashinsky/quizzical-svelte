import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const res = await fetch(`https://opentdb.com/api.php?amount=10`);
	const data = await res.json();

	if (res.ok) {
		return { data };
	} else {
		throw new Error(data);
	}
}) satisfies PageServerLoad;
