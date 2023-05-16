console.log()
console.log(`var.js\n`)

/* 'var' is scoped to either global or functional lexical environments. */

for (let i = 0; i < 1; ++i)
    var first = 'something'

if (first === 'something')
    console.log(`'first' in global lexical environment.`)

var second = null

function x() {
    var second = 'something'
}

x()

console.log(`'second' equals ${second}.`)

/* 'var' can be redeclared.  */

var third = 'something'
var third = 'hungry'

if (third === 'hungry')
    console.log(`'third' was redeclared succesfully.`)

/* 'var' declarations are hoisted to the top of their scope. */

console.log(`'fourth' equals ${fourth}.`) /* however, their assignments are synchronous. */
var fourth = 'something'

/* when 'var' was the only option, there was no built-in way to declare block-level variables. */
/* programmers found a workaround with immediately-invoked function expressions (IIFE). */

/* inside blocks, programmers would insert these expressions to emulate block-level visibility. */

var flag = true

if (flag) {
    (
        function() {
            var first = 1
            var second = 2

            console.log(`using an IIFE: ${first} + ${second} = ${first + second}.`)
        }
    )()
}

console.log()