/* syntax for 'setTimeout' and 'setInterval': */
/* set*(func, [delay,] [arg1,[arg2]...]) */

const x = (a, b) => console.log(`${a + b}`)
setTimeout(x, 0, 8, 3)

/* 'setTimeout' and 'setInterval' only start counting */
/* time after the rest of the script executes. thus, */
/* the following code will execute first: */

console.log(`hey there!`)

/* 'setInterval' executes functions at the start of intervals. */
/* if a function is slow, the perceived interval between the end */
/* and start of executions may be small. */

/* sometimes, a function may exceed its interval. */
/* in such cases, the engine will wait until it finishes, */
/* and execute it again immediately. */

/* to impose a set interval between executions, */
/* we can use nested 'setTimeout's. */

let count = 0

setTimeout(function y() {
    x(0, count)
    ++count

    if (count < 5)
        setTimeout(y, 500)
}, 500)

/* as long as 'setInterval' is running, its functions stay in memory forever. */
/* since functions save their outer lexical environment, running 'setInterval' */
/* may require more memory than is first obvious. */

/* 'setTimeout' functions are automatically garbage-collected by the engine. */

/* time continues to tick during alert|confirm|prompt dialogs. */