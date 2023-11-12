/* '+page.js' and '+layout.js' comprise universal load functions. */

/* universal load functions execute in the server during server-side rendering. */
/* if client-side rendering is enabled, subsequent renders execute such functions in the client. */

/* these functions can be used to include non-serializable constructs in 'data', such as components. */
/* use universal load functions whenever possible. */

/* if both server and universal load functions exist, results from server passed to corresponding universal functions. */
/* then, only what's returned from universal load functions is included in actual 'data'. */

export const load = async ({data, parent}) => { /* 'data' holds unmerged object from '+page.server.js'. 'parent' returns a promise w/ 'data' from surrounding '+layout[\.server]\.js' files. */
    console.log('data:')
    console.log(data)

    const load_from_parent = await parent()
    console.log(`parent:`)
    console.log(load_from_parent)
}