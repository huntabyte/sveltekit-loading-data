<script>
	export let data;
	const {covid} = data;
	const paraArray = Object.entries(covid[0])
	console.log(Object.entries(covid[0]));
	import Para from '../../lib/para.svelte';
</script>

<h1>Covid Information</h1>

{#each paraArray as para}
	<Para feature={para[0]} value={para[1]}/>
{/each}