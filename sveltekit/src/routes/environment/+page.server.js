/* environment variables w/out the 'PUBLIC_' prefix in '.env' can be imported w/ '$env/static/private'. */
/* sveltekit only permits this import in the server. */

import {password} from '$env/static/private'

export const actions = {
    default: async ({request}) => {
        const data = await request.formData()
        
        console.log(password)
        console.log(data.get('password'))

        if (data.get('password') === password) 
            return {status: 'correct'}

        return {status: 'incorrect'}
    }
}