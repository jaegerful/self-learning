<script>
    /* directories w/ double-bracket wrappers represent optional parameters. */
    /* if optional parameters omitted, their corresponding page still used. */

    import {page} from '$app/stores'

    /* directories w/ single-bracket wrappers and ellipsis represent rest parameters. */
    /* when parameters omitted, their corresponding page does not get used. */
    /* sveltekit considers every other possible route before settling for one w/ rest parameters. */

    /* directories w/ single-bracket wrappers and an equal sign represent matcher parameters. */
    /* parameters must adhere to corresponding patterns in the 'params' directory. */
    /* like rest parameters, omissions do not result in corresponding page being used. */
</script>

<p><strong>locale:</strong> {$page.params.value ?? 'en'}</p>