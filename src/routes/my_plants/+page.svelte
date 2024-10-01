<script>
    import PlantTile from '../../components/PlantTile.svelte';
    import Navbar from '../../components/Navbar.svelte';
    import fetchMyPlants from '../../utils/fetchMyPlants'
    import removePlant from '../../utils/removePlant.js';

    const plantsPromise = fetchMyPlants();
</script>

<Navbar />

<h1>My Plants</h1>
{#await plantsPromise}
    Loading your plants...
{:then plants}
    <div id='owned-plants'>
        {#each plants as plant}
        {#if plant["Common name (fr.)"]}
            <div class='owned-plant'>
                <a href='/explore/{plant.id}'>
                    <PlantTile {plant} />
                </a>
                <button class='remove-plant-button' on:click={() => removePlant(plant.id)}>Remove this plant</button>
            </div>
        {/if}
    {/each}
    </div>
{:catch err}
    Error fetching plant data: {err.message}
{/await}

<style>
    #owned-plants {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .owned-plant {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        text-align: center;
    }
</style>

