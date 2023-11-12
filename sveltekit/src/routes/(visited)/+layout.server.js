/* route groups are directories wrapped w/ parentheses. */
/* they are transparent folders, not included in corresponding routes. */
/* their main purpose is to guard associated routes w/ '+layout.server.js'. */

import {redirect} from '@sveltejs/kit'

export const load = ({cookies}) => {
    if (!cookies.get('visited')) {
        throw redirect(303, '/')
    }
}