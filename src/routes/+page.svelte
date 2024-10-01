<div id='splash-container'>
    <a class='splash-button' href='/my_plants'>
        My Plants
    </a>
    
    <a class='splash-button' href='/explore'>
        Explore Plants
    </a>
</div>

<style>
    #splash-container {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .splash-button {
        margin: 100px;
        height: 200px;
        width: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        border: 2px solid rgb(19, 80, 24);
        transition: background-color 0.5s ease 0s;
    }

    .splash-button:hover {
        background-color: rgb(213, 236, 213);
        transition: background-color 0.5s ease 0s;
    }

    :global(body) {
        background-color: rgb(193, 229, 193);
        color: rgb(19, 80, 24);
        font-family: Arial, Helvetica, sans-serif;
    }

    :global(a) {
        text-decoration: none;
        color: rgb(19, 80, 24);
    }

    a {
        font-size: 25px;
    }
</style>