<script lang="ts">
	import { decode } from 'he';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	const questions = data.data.results;
	console.log(questions);
</script>

<h1>Welcome to SvelteKit</h1>

<ul>
	{#each questions as question}
		<li>{decode(question.question)}</li>
	{/each}
</ul>
