/* the engine revolves around an event loop. */
/* each iteration of the event loop executes */
/* the head (i.e. oldest task) of the task queue. */

/* a single task is one of three things: */
/* 1. a program. */
/* 2. an event handler. */
/* 3. a 'setTimeout' or 'setInterval' handler. */

/* after each iteration of the event loop, */
/* the engine executes every item in the microtask queue, */
/* from first to last. */

/* a microtask is one of two things: */
/* 1. a promise handler */
/* 2. a piece of code directly inserted with 'queueMicrotask()'. */

/* when a promise settles, it's corresponding handlers */
/* are added to the microtask queue. */

const promise = Promise.resolve()

/* first example: 'console.log' is out of order. */
/* this phenomenon is because the engine adds */
/* all three promises at once to microtask queue. */

promise.then(() => new Promise(resolve =>
    setTimeout(() => {
        console.log(`handler a done!`)
        resolve()
    }, 2000)
))

promise.then(() => new Promise(resolve =>
    setTimeout(() => {
        console.log(`handler b done!`)
        resolve()
    }, 1000)
))

promise.then(() => new Promise(resolve => {
        console.log(`handler c done!`)
        resolve()
    }
))

/* second example: 'console.log' is in order. */
/* this phenomenon is due to the fact that */
/* successive handlers aren't added to the */
/* microtask queue until the previous promise */
/* settles. thus, their intervals don't overlap. */

promise.then(() => new Promise(resolve =>
    setTimeout(() => {
        console.log(`\nhandler x done!`)
        resolve()
    }, 3000)
))
.then(() => new Promise(resolve =>
    setTimeout(() => {
        console.log(`handler y done!`)
        resolve()
    }, 2000)
))
.then(() => new Promise(resolve =>
    setTimeout(() => {
        console.log(`handler z done!\n`)
        resolve()
    }, 1000)
))

console.log()
console.log(`event loop finished.\n`)

/* in summary, promise handlers aren't added to microtask queue */
/* until the promises they're waiting on settle. these handlers */
/* are then eventually executed in the queue. */