<!-- the default error page can be overriden w/ '+error.svelte'. -->

<!-- wherever an error occurs, the nearest '+error.svelte' is rendered. -->
<!-- all of these error pages are rendered inside 'routes/+layout.svelte'. -->

<script>
    import {page} from '$app/stores'
</script>

<h1>error <span>{$page.status}</span>:</h1>
<h2>{$page.error.message.toLowerCase()}.</h2>

<style>
    h1 {
        font-weight: 200;
        color: red;
    }

    span {
        font-weight: 600;
    }

    h2 {
        font-weight: 200;
    }
</style>
