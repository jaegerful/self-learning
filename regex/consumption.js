'use strict'

/* backslashes in regex patterns w/ '/.../' activate alternative meanings for special characters. */
/* if unnecessary backslashes are included, they'll be automatically removed. */

const message = 'the motorcycle quickly sped.'
const regex = /t\h\e/

console.log(`\nbackslashes removed: ${regex.test(message)}.\n`)