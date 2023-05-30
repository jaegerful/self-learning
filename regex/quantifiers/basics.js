'use strict'

/* a quantifier specifies how many instances of a set (or character) should occur. */

const first = '+7(903)-123-45-67'
const phone = /\b\d{1,3}\b/g /* matches numbers of length [1, 3]. */

console.log(`\nunits in a phone number: ${first.match(phone)}.`)

/* if '\d{1,}' was used instead in the above regex, numbers of length [1, infinity). */

/* shorthands for quantifiers: */
/* 1. +: {1,}. */
/* 2. ?: {0,1}. */
/* 3. *: {0,}. */