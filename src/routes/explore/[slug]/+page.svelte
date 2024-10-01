<script>
    import { page } from '$app/stores'
    import fetchPlant from '../../../utils/fetchPlant.js';
    import addPlant from '../../../utils/addPlant.js';
    import Navbar from '../../../components/Navbar.svelte';

    const plantPromise = fetchPlant($page.url.pathname.split('/')[2]);
</script>

<Navbar />

<div>
    {#await plantPromise}
        Loading plant...
    {:then plant}
        <h1>{plant['Latin name']}</h1>
        <h2>{plant['Common name (fr.)'] ? plant['Common name (fr.)'] : ''}</h2>
        <img src={plant.Img} alt={plant['Latin name']}>
        <button on:click={() => addPlant(plant.id)}>Add to My Plants</button>
    {/await}
</div>