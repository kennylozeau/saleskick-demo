<script>
    export let plant;
</script>

<div class='plant-tile'>
    <img src={plant.Img} alt={plant['Common name (fr.)']}>
    <h3>
        {plant['Common name (fr.)']}
    </h3>
        
</div>

<style>
    .plant-tile {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 40px;
        margin-bottom: 0px;
    }
</style>