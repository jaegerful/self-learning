'use strict'

/* create a function with 'Function' constructor. */
let x = new Function('a', 'b', 'return a + b')
console.log(x(1, 2))

/* these kinds of functions always reference the global lexical environment, */
/* regardless of where they are instantiated. */