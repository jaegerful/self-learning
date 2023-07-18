import {error} from '@sveltejs/kit'
import posts from '$lib/posts.js'

export const load = ({params}) => {
    const post = posts.find(post => post.slug === params.slug)

    if (post === undefined) {
        /* 'error' from '@sveltejs/kit' does not log error to server console. */
        /* its status and description are displayed instead of the page's contents. */

        throw error(404, 'unfortunately, this post does not exist')

        /* the built-in 'Error' class, though, does log error to server console. */
        /* a '500' status and 'Internal Error' description are displayed instead of the page's contents. */
        
        throw new Error('unfortunately, this post does not exist')
        
        /* in other words, the actual description of an 'Error' is only displayed to server console. */
    }
    
    return {post}
}

export const actions = {
    update: async ({params, request}) => {
        const {slug} = params
        const data = await request.formData()
        const post = posts.find(post => post.slug === slug)

        post.title = data.get('title')
        post.content = data.get('content')
    }
}