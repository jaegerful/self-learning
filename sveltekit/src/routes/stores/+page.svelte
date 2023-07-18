<script>
    import {page, navigating, updated} from '$app/stores'
</script>

<div class = 'container'>
    <div>
        <!-- the 'page' store makes some of the parameters passed to -->
        <!-- load, action, and route functions available to components. -->

        <h1>page</h1>
        <ul>
            <li><b>url.toString():</b> {$page.url.toString()}</li>
            <li><b>params</b> (route parameters)</li>
            <li><b>route:</b> {$page.route.id}</li>
            <li><b>error</b></li>
            <li><b>data</b> (from load functions)</li>
            <li><b>form</b> (from form actions)</li>
        </ul>
    </div>

    <div>
        <!-- the 'navigating' store is only available when a page is loading. -->
        <!-- it indicates the previous page ('from'), the loading page ('to') and how the user got to the loading page ('type'). -->

        <h1>navigating</h1>
        <ul>
            {#if $navigating}
                <!-- 'from' and 'to' overlap information w/ the 'page' store. -->

                <li><b>from.url.toString():</b> {$navigating.from.url.toString()}</li>
                <li><b>to.url.toString():</b> {$navigating.to.url.toString()}</li>

                <!-- 'type' is a string. -->

                <li><b>type:</b> {$navigating.type}</li>
            {/if}
        </ul>
    </div>

    <div>
        <!-- the 'updated' store holds 'true' if an updated version of this application has been deployed. -->
        <!-- for this to work, 'kit.version.pollInterval' must be defined in 'svelte.config.js'. -->

        <h1>updated</h1>
        <ul>
            <li>{$updated}</li>
        </ul>
    </div>
</div>

<style>
    .container {
        display: flex;
        justify-content: space-evenly;
    }
</style>