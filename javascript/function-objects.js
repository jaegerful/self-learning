'use strict'

const x = () => {}
const y = x

/* functions have a 'name' property. */
console.log()

console.log(`name of x: ${x.name}`)
console.log(`name of y: ${y.name}`)

/* functions have a 'length' property. this denotes its number of parameters. */
console.log()

const z = (a, b) => 0

console.log(`length of x: ${x.length}`)
console.log(`length of z: ${z.length}`)

/* adding a custom property to a function does not make it a local variable. */
console.log()

const a = () => console.log(h)
a.h = 'something'

try {
    a()
}
catch {
    console.log('a does not have local variable h.')
}

/* custom function properties are persistent through all calls. */
console.log()

const b = () => console.log(b.data)
b.data = 'guyana'

b()
b()

/* named function expressions (nfe) provide a reliable internal name for recursive calls. */
console.log()

console.log('simple function expression:')

let factorial = function(number) {
    if (number === 1)
        return 1
    
    return number * factorial(number - 1)
}

let d = factorial
factorial = null

try {
    d()
}
catch(error) {
    console.log('factorial is not a function.')
}

console.log()
console.log(`named function expression:`)

factorial = function func(number) {
    if (number === 1)
        return 1
    
    return number * func(number - 1)
}

console.log(d(3))
console.log()