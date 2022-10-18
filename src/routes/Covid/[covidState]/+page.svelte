<script>
    import Para from "$lib/para.svelte";
    export let data;
    console.log(Object.entries(data))
</script>

{#each data.stateData as row}
    <Para feature={row.date} value={row.totalTestResults}/>
{/each}