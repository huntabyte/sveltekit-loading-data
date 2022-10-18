<script>
    export let data;
    console.log(data.airInformation.rows)
    import Para from "../../lib/para.svelte";
</script>

{#each data.airInformation.rows as row}
    <Para feature={row.project} value={row.download_count}/>
{/each}
