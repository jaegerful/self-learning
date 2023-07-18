/* methods receive the same object as load functions. */

function GET({request, cookies}) {
    const number = Math.floor(Math.random() * 6)
    return new Response(number, {headers: {'Content-Type': 'application/json'}})
}

export {GET}