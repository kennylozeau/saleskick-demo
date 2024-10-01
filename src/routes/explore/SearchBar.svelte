<script>
  import { logEvent } from 'firebase/analytics';
    import debounce from '../../utils/debounce';
    import searchPlants from '../../utils/searchPlants';
    let query = '';
    let searchedPlants;

    const handleSearchInput = debounce(e => {
        query = e.target.value;
        searchedPlants = searchPlants(e.target.value);
    }, 500);

    $: showResults = query ? true : false;
</script>

<div>
    <input type='text' placeholder='Search for a plant by name' on:input={(e) => handleSearchInput(e)}>
    <ul class='search-results-dropdown' hidden={!showResults}>
        {#await searchedPlants then plants}
            {#if plants}
                {#each plants as plant}
                    <a href='/explore/{plant.id}'>
                        <li>{plant.common} ({plant['Latin name']})</li>
                    </a>
                {/each}
            {/if}
        {/await}
    </ul>
</div>

<style>
    input {
        width: 30%;
    }

    .search-results-dropdown {
        border: 1px solid black;
        width: fit-content;
        padding: 10px;
        list-style: none;
    }

    li {
        transition: background-color 0.3s ease 0s;
    }

    li:hover {
        background-color: rgb(204, 246, 206);
        transition: background-color 0.3s ease 0s;
        /* border: 1px solid rgb(19, 80, 24); */
        /* color: white; */
    }
</style>