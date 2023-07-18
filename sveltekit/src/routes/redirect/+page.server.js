/* redirects can be made from load functions, form actions and '+server.js' methods. */

import {redirect} from '@sveltejs/kit'

export const load = () => {
    throw redirect(307, '/generator')
}