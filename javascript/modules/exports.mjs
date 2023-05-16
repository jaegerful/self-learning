/* the 'export' keyword can be placed before any declaration. */

export const x = 'hey, it\'s a me - mario!'

export function y() {
    return 'goodbye, my friend - you\'re a brawler!'
}

/* constructs can also be exported separately - before or after their declarations! */

export {c as person, d as secret} /* these exports are hoisted downwards. 'as' is optional. */

class c {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

let d = 'this is a top secret message.'

/* how to mark an export as default: */

const e = 15

/* 1. export {e as default} */
/* 2. */ export default e