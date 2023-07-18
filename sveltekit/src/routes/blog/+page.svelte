<script>
    export let data

    /* 'form' only has values after the submission of, well, a form. */
    /* in such cases, the server resolves references to 'form' before returning html. */
    
    export let form
</script>

<h1>blog</h1>
<p>{data.description}</p>
<ul>
    {#each data.summaries as {slug, title}}
        <li><a href = '/blog/{slug}'>{title}</a></li>
    {/each}
</ul>

<!-- a uri serves as an identifier. sometimes, this identifier also serves a locator! -->
<!-- 'url' stands for 'uniform resource locator.' thus, valid urls may have nothing to do w/ the internet! -->

<!-- query parameters don't need values. the uri specification implies so. -->

<div class = 'container'>
    <div>
        <p><b>submit a post here...</b></p>

        {#if form?.create?.success}
            <p class = 'success'>success: {form.create.success}</p>
        {/if}

        <form method = 'post' action = '?/create'>
            <input placeholder = 'slug' type = 'text' name = 'slug'>
            <input placeholder = 'title' type = 'text' name = 'title'>
            <input placeholder = 'content' type = 'text' name = 'content'>
            <br>
            <button type = 'submit'>submit</button>
        </form>
    </div>

    <div>
        <p><b>delete a post here...</b></p>

        {#if form?.delete?.error}
            <p class = 'error'>error: {form.delete.error}</p>
        {/if}

        <form method = 'post' action = '?/delete'>
            <input placeholder = 'slug' type = 'text' name = 'slug'>
            <br>
            <button type = 'submit'>delete</button>
        </form>
    </div>
</div>

<!-- when forms don't have the 'action' attribute, the url of the current page is used. -->

<style>
    .container {
        margin-top: 5vh;
        
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
</style>