'use strict'

/* comparing regular expressions w/ sticky, global, and no flags set. */

console.log(`\nresults from identical regular expressions w/:`)

const first = {
    string: 'let variable = "something"',
    expression: /[a-z]{3}/y
}

first.expression.lastIndex = 4 /* the 'y' flag always uses 'lastIndex'. */
console.log(`\n1. sticky flag: ${first.string.match(first.expression)}`)

const second = {
    string: 'let variable = "something"',
    expression: /[a-z]{3}/g
}

let result
second.expression.lastIndex = 4 /* the 'g' flag only uses 'lastIndex' for 'exec' method. */

process.stdout.write(`2. global flag w/ 'exec': `)

while (result = second.expression.exec(second.string))
    process.stdout.write(`${result[0]} `)

const third = {
    string: 'let variable = "something"',
    expression: /[a-z]{3}/
}

third.expression.lastIndex = 4 /* when 'y' and 'g' flags ommitted, 'lastIndex' never has effect. */
console.log(`\n3. no flags: ${third.string.match(third.expression)}\n`)