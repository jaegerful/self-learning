/* the 'fetch' function returns a promise.  */

const request = fetch('https://javascript.info/article/promise-chaining/user.json') /* resolves with response object. */

request.then(response => {
    console.log(`\nresponse:`)
    console.log(response)

    return headers.text() /* returns a promise that resolves to body. */

    /* return headers.json() */ /* applies JSON.parse() to body. returns a promise as well. */
}).then(body => {
    console.log(`body:`)
    console.log(body)
})