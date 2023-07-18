<script>
    export let data
    import {enhance} from '$app/forms'

    /* 'enhance' uses javascript to sidestep the default behavior of form submissions: */
    /* 1. instead of reloading page, only 'load' functions are rerun. */
    /* 2. updates 'form' property. */

    /* the 'accept' header for 'enhance' submissions is 'application/json'. */
</script>

<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>

<div class = 'update'>
    <p><b>update post here...</b></p>
    <form method = 'post' action = '?/update' use:enhance>
        <input placeholder = 'title' type = 'text' name = 'title'>
        <input placeholder = 'content' type = 'text' name = 'content'>
        <br>
        <button type = 'submit'>submit</button>
    </form>
</div>

<style>
    .update {
        margin-top: 8vh;
    }
</style>