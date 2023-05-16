/* a promise is an object. */
const x = new Promise(() => {})

/* every promise receives a callback. */
/* this callback is known as the 'executor'. */

/* the executor begins to execute immediately, */
/* asynchronous to the main thread. */

/* the engine automatically passes two callbacks to the executor, */
/* 'resolve' and 'reject'. at some point, the executor */
/* should invoke one of these to settle the promise. */

const y = new Promise((resolve, reject) => {
    setTimeout(() => { /* resolve or reject after one second. */
        if (true)
            resolve(7)

        reject(new Error('we failed to do it.'))
    }, 1000)
})

/* 'resolve' receives one parameter: 'value'. */
/* 'reject' receives one parameter: 'error'. */

/* remember, an error can be any data type. */
/* however, one should return an instance of 'Error' */
/* (whether inheriting or the base class). */

/* 'resolve' and 'reject' have the same effect as 'return'. */
/* they exit a function, returning a value. */

/* every promise has these methods: 'then', 'catch', and 'finally'. */
/* they execute callbacks after the executor settles. */

/* 'then' is used when the executor invoked 'resolve'. */
/* 'catch' is used when the executor invoked 'reject'. */
/* 'finally' is used in either case. */

console.log()

y.finally(() => { /* the callback receives nothing. */
    console.log(`'finally' handler for 'y' promise.`)
})

y.then(value => { /* the callback receives a value. */
    console.log(`resolved value for 'y' promise: '${value}'.\n`)
})

y.catch(error => { /* the callback receives an error. */
    console.log(`error message for 'y' promise: '${error.message}'.\n`)
})

/* there is no order in which the ('then' or 'catch') and 'finally' */
/* handlers execute, since they are not chained, and thus independent. */

/* if they generated an internal error, they would */
/* throw a global error (except for 'catch' handlers, */
/* since they simply fail to execute). */

/* when handlers are chained, a sequential order can be specified. */
/* for a chain to exist, every handler must in turn return new promises. */
/* subsequent handlers wait on these promises to settle. */

/* the exception is 'finally', which is permeable */
/* (i.e. it passes along a promise from previous handler). */
/* the only time 'finally' passes something new to */
/* subsequent handlers is when it itself throws an error. */

y.finally(() => {
        console.log(`generating a chained 'finally' error.`)
        throw new Error('finally error')
    }
).catch(error => {
        console.log(`received chained 'finally' error: '${error.message}'.\n`)
    }
)

/* if a handler returns a promise, then subsequent */
/* handlers wait until the returned promise resolves. */
/* then, the resolved value is used. */

/* the below code works because of closures (i.e. references to external environment)! */

y.then(first => {
    (new Promise(resolve => resolve(first * 2))).then(second => {
            (new Promise(resolve => resolve(second * 2))).then(third => {
                console.log(`first: ${first}.`)
                console.log(`second: ${second}.`)
                console.log(`third: ${third}.\n`)
            })
        }
    )
});

/* if an error occurs in a promise chain, the nearest 'catch' is used, */
/* even if some handlers must be skipped to reach that catch. */

const z = new Promise(resolve => {
    setTimeout(() => resolve(3), 2000)
})
.then(() => 
    new Promise((_, reject) => {
        reject(-1)
    })
)
.then(value => value)
.catch(() => console.log(`skipped some handlers to handle in chain to handle error.\n`))

/* earlier on, we saw that 'finally' can pass something new by throwing an exception. */
/* this is also true for the other handlers. */

.then(() => {
    throw new Error('handling a thrown exception')
})
.catch(error => console.log(`caught exception in 'then' handler: ${error.message}.\n`))

/* if a 'then' or 'catch' handler returns a value, */
/* the engine treats it as if it'd returned a settled promise. */

new Promise(resolve => resolve(1)) /* result is 1. */
.then(result => result * 2) /* result is 2. */
.then(result => {throw new Error(result)}) /* result is still 2, simply passed along. */
.catch(error => {
    return Number(error.message) * 2 /* result is now 4. */
}) 
.then(result => console.log(`final result after sequence of return statements: ${result}.\n`))

/* for uncaught rejections, environments provide general handlers for them. */
/* in the browser, you can listen for the 'unhandledrejection' event. */