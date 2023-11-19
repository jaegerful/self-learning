<script>
    export let form

    /* environment variables w/ the 'PUBLIC_' prefix can be imported w/ '$env/static/public'. */
    /* sveltekit permits this import in both server and client. */

    import {PUBLIC_congrats, PUBLIC_condolences} from '$env/static/public'
</script>

<form method = 'post'>
    <label for = 'password'>password: </label><input type = 'password' name = 'password'>
    <button type = 'submit'>submit</button>
</form>

{#if form?.status === 'correct'}
    <p class = 'correct'>{PUBLIC_congrats}</p>
{:else if form?.status === 'incorrect'}
    <p class = 'incorrect'>{PUBLIC_condolences}</p>
{/if}

<style>
    .correct {
        color: green;
    }

    .incorrect {
        color: red;
    }
</style>