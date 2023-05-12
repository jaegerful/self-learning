'use strict'

console.log()

/* an asynchronous function always returns */
/* a promise. if it returns a primitive, the */
/* primitive is bundled as a resolved promise. */

async function x() {
    return 1 /* returned in a resolved promise. */
}

x().then(value => console.log(`value of x(): ${value}.`))

/* the 'await' keyword can be used inside */
/* asynchronous functions to wait for and */
/* extract the result of a promise. */

async function y() {
    const promise = new Promise(resolve => {
        setTimeout(() => resolve('inner promise resolved'), 1000)
    })

    const result = await promise
    console.log(`after awaiting promise: ${result}.`)
}

y()

/* if the awaited promise rejects, an */
/* exception is thrown in the function. */
/* one could use a catch block to handle */
/* such an error. */

async function z() {
    try {
        await new Promise((_, reject) =>
            setTimeout(() => reject(new Error(`inner promise rejected`)), 2000)    
        )
    }
    catch(error) {
        console.log(`${error.message}.\n`)
    }
}

z()

/* an alternative approach is to use a catch handler for */
/* the overall promise returned by the asynchronous function. */
/* this overall promise rejects when internal exceptions */
/* are ignored and left uncaught. */



/* miscellaneous: */

/* using the 'await' keyword for promises is a simpler */
/* approach than chaining. */

/* 'thenable' objects are objects with a 'then' method. */
/* the 'then' method must specifically function as a promise executor. */
/* the 'await' keyword can work with any 'thenable' object. */