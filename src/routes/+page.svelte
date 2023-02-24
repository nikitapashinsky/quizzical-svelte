<script lang="ts">
	import { decode } from 'he';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	const { questions } = data;
</script>

<h1>Quizzical</h1>

{#each questions as question}
	<div>
		<h3>{decode(question.question)}</h3>
		<ul>
			{#each question.incorrect_answers as answer}
				<li>{answer}</li>
			{/each}
		</ul>
	</div>
{/each}

<style>
</style>
