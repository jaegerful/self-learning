export const load = () => {
    return {
        description: 'this blog is completely random. its posts have absolutely nothing in common.'
    }
}

/* actions require requests to use the 'post' method. */
/* they receive the same object as load functions. */

import posts from '$lib/posts.js'
import {fail} from '@sveltejs/kit'

export const actions = {
    create: async ({request}) => {
        await new Promise(resolve => {
            setTimeout(() => resolve(), 5000)
        })

        const data = await request.formData() /* must have appropriately formatted body. otherwise, method throws error. */

        const slug = data.get('slug')
        const title = data.get('title')
        const content = data.get('content')

        posts.push({slug, title, content})

        return {
            create: {
                success: 'post has been created.'
            }
        }
    },

    delete: async ({request}) => {
        const data = await request.formData()
        const slug = data.get('slug')

        const index = posts.findIndex(post => post.slug === slug)

        if (index === -1)
            return fail(422, { /* refresh still occurs in browser, despite status code. */
                delete: {
                    error: 'this post does not exist.'
                }
            })

        posts.splice(index, 1)
    }
}

/* before refreshing a form page, the browser waits for a response from the server! */
/* thus, it's best practice to update our database before sending a response back to the browser. */

/* sveltekit does not permit default actions to coexist w/ named ones. */
/* the reason is simple: if a form posts to a named action first, a subsequent post to the default action would erroneously include the query parameter of the named action. */

/* html form submissions have two purposes: 1. send data to server and 2. request html for url specified by 'action' attribute. */
/* the 'accept' header for html form submissions is 'text/html'. */