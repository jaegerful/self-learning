'use strict'

/* sometimes greedy quantifiers absorb matches for the remainder of the pattern. */

/* how backtracking works for '(\d+)*': */
/* 1. starting from rightmost quantifier that can be decremented, subtract one. */
/* 2. if quantifier can still be further decremented, attempt to match a separate instance of '(\d+)'. */

const first = {
    string: '123456789z',
    expression: /^(?:\d+)*$/
}

console.time('runtime')
console.log(`\nregex w/ catastrophic backtracking: ${first.string.match(first.expression)}`)
console.timeEnd('runtime')

/* 
    groups used for '(\d+)*':

    1. 123  
    2. 12 3 
    3. 12   
    4. 1 23 
    5. 1 2 3
    6. 1 2  
    7. 1    

    derivation for formula that yields number of groups:

    1. 2^(n - 1): yields groups w/ n number of digits. each bit represents a split.
    2. we want to include groups w/ [1, n] digits, though.
    3. in other words, we want this summation: 2^(n - 1) + 2^(n - 2) + 2^(n - 3) + ... + 2^(1 - 1).
    4. from discrete math, we know this summation equals 2^n - 1.
*/

/* how to prevent backtracking: */
/* 1. use greedy quantifiers for lookaheads. */
/* 2. reference the contents of lookaheads, as they are static. */

const second = {
    string: '123456789z',
    expression: /^(?=(?<number>\d+))\k<number>$/
}

console.time('runtime')
console.log(`\nregex w/ lookahead to prevent catastrophic backtracking: ${second.string.match(second.expression)}`)
console.timeEnd('runtime')

console.log()