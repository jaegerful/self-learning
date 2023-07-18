<script>
    let number = '?'
    
    const generate = async () => {
        const response = await fetch('/generator', {headers: {'Accept': 'application/json'}})

        /* if 'text/html' explicitly in 'accept' header for 'get' request to '/generator', page rendered. */
        /* otherwise, '+server.js' is used. */

        number = await response.json()
    }
</script>

<div>
    <p class = 'fine-print'>you rolled the number</p>
    <p class = 'number'>{number}</p>
    <button on:click|trusted = {generate}>Generate Random Number</button>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .fine-print {
        font-weight: 100;
        font-size: 1.5rem;
        margin-bottom: 0;
    }

    .number {
        margin-top: 0;
        font-weight: 600;
        font-size: 5rem;
    }
</style>