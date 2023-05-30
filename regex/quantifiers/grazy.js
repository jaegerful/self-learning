'use strict'

/* by default, regex matches characters w/ a quantifier as long as possible. */
/* additional searches continue after the end of match. */

const first = {
    string: 'a "boy" and "girl" frolick across the meadows.',
    expression: /".{0,}"/gi
}

console.log(`\ngreedy mode: ${first.string.match(first.expression)}\n`)

/* regex can instead minimize its use of quantifiers. */
/* to enable this behavior, append '?' to the relevant quantifier(s). */

const second = {
    string: '""b"',
    expression: /".??b?"/gi /* ignore '.' when possible. */
}
console.log(`lazy mode: ${second.string.match(second.expression)}`)

const third = {
    string: 'abb#',
    expression: /.+?b#/g
}

console.log(`lazy mode: ${third.string.match(third.expression)}\n`)