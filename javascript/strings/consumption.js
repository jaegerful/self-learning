/* backslashes in strings activate alternative meanings for special characters. */
/* if unnecessary backslashes are included, they'll be automatically removed. */

const message = 'today\'s dinner\ was fun\!'
console.log(`\nmessage: ${message}\n`)