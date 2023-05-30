'use strict'

/* parentheses serve two specific purposes: */
/* 1. to apply quantifiers to a string. */

const first = {
    string: 'gogogo!',
    expression: /(go)+?/g
}

console.log(`\ncapturing groups to quantify strings: ${first.string.match(first.expression)}`)

/* 2. to extract the contents of each parentheses for the first match. */
/* the 'g' flag must be omitted. contents are returned in array left to right, from the second element. */

const second = {
    string: '<h1>hello, world!</h1>',
    expression: /<(.*?)>/
}

const result = second.string.match(second.expression)
console.log(`\nmatch and contents of capturing groups: ${result}`)

/* in addition, the array has an 'index' property, which holds the position of match in string. */

console.log(`index of match: ${result.index}\n`)

/* parentheses can be nested. */
/* in this case, their contents are returned in a preorder matter (i.e. root, left, right). */

const third = {
    string: '<span class = "my">',
    expression: /<(([a-z]+)\s*([^>]*))>/
}

console.log(`match and contents of nested capturing groups: ${third.string.match(third.expression)}`)

/* if contents in parentheses are optional (e.g. '?' or '*') and empty for first match, */
/* their corresponding entries in array are 'undefined'. */

const fourth = {
    string: 'ac',
    expression: /a(z)?(c)?/
}

console.log(`match w/ an 'undefined' capturing group: ${fourth.string.match(fourth.expression)}`)

/* to extract the contents of each parentheses for every match, use the 'matchAll' method. */
/* the 'g' flag should be included. instead of an array, an iterable is returned. */

const fifth = {
    string: '<h1><h2><h3>',
    expression: /<(.*?)>/g
}

const expression = /<(.*?)>/g

/* each entry (an array) corresponds to a match and the contents of its parentheses. */
/* these entries also have the aforementioned 'index' property. */

console.log(`\nusing 'matchAll' w/ the 'g' flag to retrieve matches and their capturing groups:`)

const iterable = fifth.string.matchAll(expression)
let [x, y, z] = iterable

console.log(`1. ${x}, index: ${x.index}`)
console.log(`2. ${y}, index: ${y.index}`)
console.log(`3. ${z}, index: ${z.index}`)

/* parentheses can be named by placing '?<...>' after the opening parenthesis. */
/* they can be accessed by name in array using the 'groups' property. */

const sixth = {
    string: '2023-05-22',
    expression: /^(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})$/
}

sixth.result = sixth.string.match(sixth.expression)

console.log(`\nusing named capturing groups:`)
console.log(`1. result.groups.year: ${sixth.result.groups.year}`)
console.log(`2. result.groups.month: ${sixth.result.groups.month}`)
console.log(`3. result.groups.day: ${sixth.result.groups.day}`)

/* the contents of previous parentheses can be used by regex. */

const seventh = {
    string: `he said, "she's the one!"`,
    expressions: {
        index: /(['"]).*?\1/g,
        name: /(?<quote>['"]).*?\k<quote>/g,
    }
}

console.log(`\nreferencing capturing groups later on in regex:`)
console.log(`• index: ${seventh.string.match(seventh.expressions.index)}`) /* follows preorder. */
console.log(`• name: ${seventh.string.match(seventh.expressions.name)}`)


/* parentheses can be referenced in the replacement argument for 'String.prototype.replace'. */

const eigth = {
    string: 'Harl Hubbs',
    expression : /(?<first_name>\w+) (?<last_name>\w+)/
}

console.log(`\nusing capturing groups for replacement by:`)
console.log(`• index: ${eigth.string.replace(eigth.expression, '$2, $1')}`)
console.log(`• name: ${eigth.string.replace(eigth.expression, '$<last_name>, $<first_name>')}`)

/* place '?:' after opening parenthesis to exclude parentheses from being: */

/* 1. referenced later on by regex. */
/* 2. included in results. */

const ninth = {
    string: 'yo, bandana!',
    expression: /(?:yo), [a-z]+/i
}

console.log(`\npreventing capturing group from having its own entry in array: ${ninth.string.match(ninth.expression)}\n`)