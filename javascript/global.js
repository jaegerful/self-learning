/* 'globalThis' references the global object in all environments. */
console.log(globalThis)

/* 'globalThis' contains all of the engine's built-in objects */
/* and functions. however, it does not store our declared variables. */

console.log(Boolean(globalThis.Promise))

var first = 'something'
let second = 'something'

console.log(globalThis.first)
console.log(globalThis.second)

/* in the browser, 'this' references the global object when used at the top level. */
/* in node, 'this' is an empty object. */