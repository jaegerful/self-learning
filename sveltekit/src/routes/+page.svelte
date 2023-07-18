<script>
    export let data
    import Author from '$lib/author.svelte'
</script>

<h1>hello, {data.visited ? 'friend' : 'stranger'}!</h1>
<p>visit <a href="https://blanker.vercel.app">blanker.vercel.app</a> to learn more.</p>
<Author/>