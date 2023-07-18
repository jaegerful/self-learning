import posts from '$lib/posts.js'

export const load = () => {
    const summaries = posts.map(post => {
        const {slug, title} = post
        return {slug, title}
    })

    return {summaries}
}