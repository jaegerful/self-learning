'use strict'

/* javascript comes built-in w/ the 'RegExp' class. */
/* there are two ways to initialize 'RegExp' objects: */

new RegExp('pattern', 'i')
let _ = /pattern/i

/* the latter option, although cleaner, does not permit embedded expressions. */

/* possible flags: */
/* 1. 'i': case-insensitve matches. */
/* 2. 'g': consider every match (w/out this flag, only first match considered). */
/* 3. 'm': make anchors '^' and '$' mean start and end of lines. */
/* 4. 's': make '.' character class include '\n'. */
/* 5. 'u': treat surrogate pairs as characters. support '\p{}'. */
/* 6. 'y': match only from 'lastIndex' property. */

/* how to use 'RegExp' objects to extract matching substrings. */

const sentence = 'I started as a tiny acorn - my only friend, the dirt.'
let results = sentence.match(/a/g)

console.log('\nusing \'match\' method w/ regex:')
console.log(results)

/* if no match found, 'null' is returned. */

/* how to use 'RegExp' objects to replace matching substrings. */

let result = sentence.replace(/acorn/, 'seedling')

console.log('\nusing \'replace\' method w/ regex:')
console.log(result)

/* how to use 'RegExp' objects to test if string has at least one match. */

let expression = /friend/
result = expression.test(sentence)

console.log('\nusing \'test\' method w/ regex:')
console.log(result)