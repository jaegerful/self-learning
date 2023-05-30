'use strict'

/* how to use custom set of characters. */

const first = 'o'
const vowels = /[aeiou]/

console.log(`\ncustom set works: ${vowels.test(first)}.`)

/* custom sets can have ranges. */
/* a range's first character must have a smaller encoding than that of the range's last character. */

const second = 'xF3'
const hexadecimal = /^x[\da-f][\da-f]$/i /* the 'i' flag makes 'a-f' include 'A-F'. */

console.log(`custom set w/ ranges works: ${hexadecimal.test(second)}.`)

/* to match character if part of complement for set, insert '^' at start of set. */

const third = 'emotional@damage.com'
const nonletters = /[^a-z]/i

console.log(`custom set w/ complement works: ${nonletters.test(third)}.\n`)

/* the following characters aren't special in sets: */
/* 1. always: . ( ) + * ? */
/* 2. when placed at start or end of range: - */
/* 3. when not placed at start of range: ^ */

/* in other words, sets have a unique set of special characters. */