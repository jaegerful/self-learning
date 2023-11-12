/* page options can be set by '+page.server.js' and '+layout.server.js'. */
/* options nearest selected '+page.svelte' are used. */

/* list of options: */
/* 1. server-side rendering: render page in server. */ export const ssr = false /* default: 'true'. set to 'false' if component(s) require browser objects. */
/* 2. client-side rendering: use javascript in browser and serve javascript to render subsequent pages (which prevents reloads in browser). */ export const csr = false /* default: 'true'. */
/* 3. prerendering: render page at build time. */ export const prerender = true /* default: 'false'. set to 'true' if component(s) do not use form actions or conditions (i.e. '#if' and ':else'). */

/* relative urls remove last component if absolute url does not have a trailing slash. browser assumes last component does not serve as a directory. */
/* otherwise, if absolute url has a trailing slash, relative url gets appended to absolute url. browser assumes last component serves as a directory. */

/* by default, sveltekit redirects urls w/ trailing slashes to those w/out them. */
/* to invert this redirect, use: */ export const trailingSlash = 'always'

/* to disable redirects (i.e. to support both urls for the same page), set 'trailingSlash' to 'ignore'. */