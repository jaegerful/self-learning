/* decorators return a wrapper for a passed function. */
let inc = (a) => a + 1

/* the wrapper adds to the behavior of the function. */
/* in this case, integration with a cache. */
const cachingDecorator = (f) => {
    let cache = new Map()

    return function(a) {
        if (cache.has(a))
            return cache.get(a)

        let result = f(a)
        cache.set(a, result)
        return result
    }
}

/* does not override 'f' call. 'f' still exists in lexical environment. */
inc = cachingDecorator(inc)

console.time('inc(50): first call')
inc(50)
console.timeEnd('inc(50): first call')

console.time('inc(50): second call')
inc(50)
console.timeEnd('inc(50): second call')

console.log()

console.time('inc(1031): first call')
inc(1004)
console.timeEnd('inc(1031): first call')

console.time('inc(1031): second call')
inc(1004)
console.timeEnd('inc(1031): second call')

console.log()

/* even though 'this' is a part of lexical environments, it is not */
/* traced for if undefined. thus, every function needs its own 'this'. */

/* for this reason, 'function.call' exists. it accepts an arbitrary. */
/* number of arguments. */

let obj = {x: 3}

const y = function(a, b) {return a * b  * this.x}
let result = y.call(obj, ...[2, 4]) /* try 'y()' to get an error. */

console.log(`result of y.call: ${result}`)

/* 'function.apply' is identical. the only difference is that it */
/* accepts any array-like object for its arguments. */

result = y.apply(obj, [2, 4])
console.log(`result of y.call: ${result}`)

/* parameters are declared by name for easy access. */
/* however. there are other ways to access arguments. */

/* functions support the 'arguments' array-like object. */
/* here, arguments can be accessed by index. */

/* you can pass an arbitrary number of arguments */
/* to a function. only the needed ones will be used. */