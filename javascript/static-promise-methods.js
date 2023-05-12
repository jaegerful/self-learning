'use strict'

/* following are static methods supported by */
/* the built-in 'Promise' class. */

/* 'Promise.all' receives an iterable of promises. */
/* it itself returns a singular promise, which settles */
/* after all the promises in the iterable have settled. */

/* when complete, 'Promise.all' presents an iterable with */
/* the resolved values. the order of the settled values is */
/* the same as the order in which the internal promises */
/* where provided. */

Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)),
    new Promise(resolve => setTimeout(() => resolve(2), 2000)),
    new Promise(resolve => setTimeout(() => resolve(3), 1000)),
])

.then(results => {
    results.forEach(function(result, index) {
        console.log(`result ${index}: ${result}`)
    })
})

/* if any of the promises inside 'Promise.all' reject, */
/* the promise returned by 'Promise.all' will reject with */
/* that error. other promises inside 'Promise.all' may */
/* continue to execute, but there results don't matter anymore. */

/* 'Promise.all' accepts primitive values in its iterable. */

/* 'Promise.allSettled' is exactly like 'Promise.all', */
/* except in two matters: it tolerates internal */
/* promise rejections, and when it returns an iterable, */
/* it does so in the following format: */

/* {
        status: ['fulfilled' | 'rejected'], 
        [value: result | reason: error]
    } 
*/

/* 'Promise.race' also accepts an iterable of promises. */
/* however, once an internal promise settles, the overall */
/* 'Promise.race' promise settles with that same status. */

/* 'Promise.any' also accepts an iterable of promises. */
/* however, it waits until one of its internal promises */
/* resolves to a value. it then resolves to that same value. */
/* if they all reject, the 'Promise.any' promise also rejects */
/* with an 'AggregateError', an object that stores every internal */
/* promise error in its 'errors' array property. */

/* 'Promise.resolve(value)' creates a resolved promise with */
/* the corresponding value. */

/* 'Promise.resolve' is useful when a function is expected */
/* to return a promise. */

/* when 'Promise.resolve' is wrapped around an existing promise, */
/* it has no effect. */

/* 'Promise.reject(error)' creates a rejected promise */
/* with the corresponding value for its error. */