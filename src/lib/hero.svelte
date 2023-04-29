<div class="container">
    <section id="name">
        <div>
            <h1>Harry Peach</h1>
        </div>
    </section>
    <section id="list">
        <ul>
            <li>Software Engineer</li>
            <li>Software Engineer</li>
            <li>Software Engineer</li>
        </ul>
    </section>
</div>

<style>
    h1 {
        font-family: "Roboto Slab", serif;
        font-size: 5em;
    }

    section {
        display: flex;
        padding: 5vw;
        border-left: 2px solid black;
        border-bottom: 2px solid black;
        align-items: center;
        flex: 1;
        min-width: 400px;
    }
    
    #name {
        justify-content: center;
        background: rgb(163, 237, 255);
    }

    #list {
        font-family: "Space Grotesk", sans-serif;
        font-size: 1.4em;
        background: rgb(153, 255, 153);
    }
    
    .container {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        justify-content: center;
        height: 400px;
        width: 100vw;
        flex-wrap: wrap;
    }
</style>