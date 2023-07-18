/* '+page.server.js' runs even when not returning an object. */

export const load = ({setHeaders, cookies}) => {

    /* 'setHeaders' can be used to set any header(s), except 'Set-Cookie'. */
    setHeaders({'Content-Type': 'text/html'})

    /* to get and set cookies use the provided 'cookies' object. */
    const visited = cookies.get('visited')

    if (visited === undefined)
        cookies.set('visited', true, {path: '/'})

    return {visited: visited ?? false}
}

/* cookies are specific to a domain (sometimes subdomains) and subpaths. */
/* cross-site cookie setting not permitted. */