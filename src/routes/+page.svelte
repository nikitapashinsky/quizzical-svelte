<script lang="ts">
	import { decode } from 'he';

	async function getData() {
		const res = await fetch(`https://opentdb.com/api.php?amount=10`);
		const data = await res.json();
		console.log(data);

		if (res.ok) {
			return data.results;
		} else {
			throw new Error(data);
		}
	}

	let promise = getData();
</script>

<h1>Welcome to SvelteKit</h1>

{#await promise then questions}
	<ul>
		{#each questions as question}
			<li>{decode(question.question)}</li>
		{/each}
	</ul>
{:catch error}
	<p>{error.message}</p>
{/await}
