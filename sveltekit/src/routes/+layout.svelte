<!-- to preload javascript for page and execute load functions on hover (desktop) or tap (mobile) of link. -->
<!-- use the 'data-sveltekit-preload-data' attribute in 'a' elements to enable this behavior. -->

<!-- to only preload javascript for page, use 'data-sveltekit-preload-code'. -->
<!-- to reload entire page, use 'data-sveltekit-reload'. -->

<nav>
	<a href = '/' data-sveltekit-preload-data>home</a>
	<a href = '/blog' data-sveltekit-preload-code = 'eager'>blog</a>
	<a href = '/generator' data-sveltekit-reload>generator</a>
	<a href = '/stores'>stores</a>
	<a href = '/redirect'>redirect</a>
</nav>

<slot></slot>

<style>
	nav {
		margin-bottom: 30px;
	}
</style>