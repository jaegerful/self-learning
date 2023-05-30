'use strict'

/* lookarounds enable us to consider characters w/out having to include them in matches. */

/* lookaheads ensure (a part of) our pattern is followed by a specific expression. */
/* append '(?=...)' to perform a lookahead. */

const first = {
    string: '1 turkey costs 30€',
    expression: /\d\d(?=€)/
}

console.log(`\nusing a lookahead: ${first.string.match(first.expression)}`)

/* if consecutive lookarounds are inserted, they apply to the same (part of our) pattern. */

const second = {
    string: '1 turkey costs 30€',
    expression: /\d\d(?=€)(?=\p{Sc})/u /* the 'Sc' property marks currency. */
}

console.log(`using consecutive lookaheads: ${second.string.match(second.expression)}`)

/* negative lookaheads ensure (a part of) our pattern isn't followed by a specific expression. */
/* append '(?!...)' to perform a negative lookahead. */

const third = {
    string: '1 turkey costs 30€',
    expression: /\d+(?!\p{Sc})/u
}

console.log(`\nusing a negative lookahead: ${third.string.match(third.expression)}`)

/* lookbehinds ensure (a part of) our pattern is preceded by a specific expression. */
/* prepend '(?<=...)' to perform a lookbehind. */

const fourth = {
    string: '1 turkey costs $30',
    expression: /(?<=\$)\d+/u /* weirdly enough, '$' must be escaped, even though it's not at end. */
}

console.log(`\nusing a lookbehind: ${fourth.string.match(fourth.expression)}`)

/* negative lookbehinds ensure (a part of) our pattern isn't preceded by a specific expression. */
/* prepend '(?<!...)' to perform a negative lookbehind. */

const fifth = {
    string: '1 turkey costs $30',
    expression: /(?<!\p{Sc})\d+/u
}

console.log(`using a negative lookbehind: ${fifth.string.match(fifth.expression)}\n`)

/* lookarounds are not capturing groups, as their contents aren't included in matches. */
/* however, this behavior can be side-stepped by wrapping said contents in parentheses. */

const sixth = {
    string: '1 turkey costs $30',
    expression: /(?<=(\p{Sc}))\d+/u
}

console.log(`using capturing groups in lookbehind: ${sixth.string.match(sixth.expression)}\n`)