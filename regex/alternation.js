'use strict'

/* since '(' and ')' aren't special characters in sets, they can't be used there to form strings. */

const first = {
    string: 'first html appeared, then css, then javascript.',
    expression: /[(html)(css)(java(script)?)]/g
}

console.log(`\nattempting to use capturing groups in set: ${first.string.match(first.expression)}`)

/* in other words, strings can't be used in sets. */
/* alternations enable us to use strings in sets, w/ the '|' notation. */

const second = {
    string: 'first html appeared, then css, then javascript.',
    expression: /html|css|java(script)?/g
}

/* alternations form strings by grouping characters between pipes. */
/* for the leftmost and rightmost strings, alternations go as far left and right as possible. */

console.log(`\nusing alternations to make a set of strings: ${second.string.match(second.expression)}`)

/* to limit the leftmost and rightmost groupings of alternations, wrap them in parentheses. */

const third = {
    string: 'is it gray or grey?',
    expression: /\b(gray|grey)\b/g
}

console.log(`\nusing delimited alternations: ${third.string.match(third.expression)}\n`)