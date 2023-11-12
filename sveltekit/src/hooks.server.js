/* 'handle' intercepts requests before matched by sveltekit. */

export const handle = async ({event, resolve}) => {
    /* parameters: */
    /* 1. 'event' is same instance of 'RequestEvent' passed to load functions, form actions and methods. */
    /* 2. 'resolve' makes sveltekit match request. */

    event.fetch('/emotional')

    if (event.url.pathname === '/secret')
        return new Response('this route was created on 07.19.22.')

    return await resolve(event, {
        /* 'transformPageChunk' modifies rendered pages.  */
        /* this function only executes when the 'accept' request header includes 'text/html'. */

        transformPageChunk: ({html}) => {
            console.log('\nhtml of rendered page:\n')
            console.log(html)
            return html
        }
    })
}

/* 'event.fetch' differs from 'fetch' in three regards: */
/* 1. it includes 'cookie' and 'authorization' headers from incoming external request. */
/* 2. it supports relative urls. */
/* 3. it does not use the internet for internal requests. */

/* 'handleFetch' intercepts 'event.fetch' invocations in the server. */

export const handleFetch = ({event, request}) => {
    /* parameters: */
    /* 1. 'event' is instance of 'RequestEvent,' representing the incoming external request. */
    /* 2. 'request' is instance of 'Request' used by 'event.fetch' invocation. */

    console.log(event.request)
    console.log(request)
}

/* if an exception occurs, '$page.error' and '%sveltekit.error%' hold {message: 'internal error' or 'not found'}. */
/* to replace this object, use 'handleError'. */

export const handleError = ({event, error}) => {
    /* parameters: */
    /* 1. 'event' is instance of 'RequestEvent,' representing the incoming external request. */
    /* 2. 'error' is the aforementioned object for exception. */

    return {
        message: 'no clue what happened, but it must be bad.',
        author: 'clueless person'
    }
}