<script>
    import PlantTile from '../../components/PlantTile.svelte';
    import fetchAllPlants from '../../utils/fetchAllPlants'
    import SearchBar from './SearchBar.svelte';
    import Navbar from '../../components/Navbar.svelte';

    const plantsPromise = fetchAllPlants();
</script>

<Navbar />
<SearchBar />

<div id='explore-container'>
    {#await plantsPromise}
        Loading plant data...
    {:then plants}
        {#each plants as plant}
            {#if plant["Common name (fr.)"]}
                <a href='/explore/{plant.id}'>
                    <PlantTile {plant} />
                </a>
            {/if}
        {/each}
    {:catch err}
        Error fetching plant data: {err.message}
    {/await}
</div>


<style>
    #explore-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        justify-content: center;
    }
</style>

