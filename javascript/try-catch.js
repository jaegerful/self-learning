'use strict'

console.log()
console.log(`try-catch.js\n`)

/* try-catch blocks catch runtime errors. */
/* in other words, errors that occur when */
/* executing part of a valid parse tree. */

/* runtime errors are also called 'exceptions.' */

try {
    x /* non-existent variable. */
}
catch(err) {
    console.log(`err: '${err}.'\n`)
}

/* when an exception occurs, the engine initializes an object */
/* to describe it. here are some universal properties of exception objects: */

try {
    x /* non-existent variable. */
}
catch(err) {
    console.log(`err.name: '${err.name}'\n`)
    console.log(`err.message: '${err.message}'\n`)
    console.log(`err.stack: '${err.stack}'\n`)
}

/* 'catch' does not need to have an explicit parameter. */

try {
    x /* non-existent variable. */
}
catch {
    console.log(`executed catch successfully without a parameter.`)
}

/* we can throw exceptions at our will. */
/* they may be an object or simply a primitive. */

try {
    const json = '{"age": 30}'
    const user = JSON.parse(json)

    if (user.name === undefined)
        throw new SyntaxError('object must have a \'name\' property.')
}
catch(err) {
    console.log(`custom exception: ${err.message}.`)
}

/* try-catch blocks in javascript do not support trailing catch blocks. */
/* thus, all errors in the try block trigger the same catch block. */
/* it is best practice to make a catch block handle a specific error, */
/* rethrowing all other exceptions. */

try {
    user = null
}
catch(err) {
    if (err instanceof ReferenceError)
        console.log(`catch block handled exception it was designed for.\n`)
    else
        throw err /* catch block throws all other errors. */
}

/* the finally block always runs, regardless of whether the try or catch block executed. */
/* the finally block executes even if a return statement exists in the try or catch block. */

function fun() {
    try {
        return 153
    }
    catch {
        null
    }
    finally {
        console.log(`finally block executed.`)
    }
}

let result = fun()
console.log(`result === ${result}.\n`)

/* try-finally blocks allow errors to occur, but ensure that if they do, */
/* the finally block will execute nonetheless. */

/* some environments provide handlers that execute when a script has an exception. */
/* on node, it's process.on('uncaughtException'). on the browser, it's 'window.onerror'. */

process.on('uncaughtException', (message) => console.log(`handler invoked: '${message}.'`))
funky()

/* apparently, even if these global handlers are used, the script terminates. */
console.log(`1 + 364: ${1 + 364}`) /* this statement never executes. */

/* exceptions, if uncaught, bubble from their locus to the outer */
/* invoking code, and so on. if none of these levels of code handle */
/* the error, the script terminates. */