/* we can extend built-in classes. */

class PowerArray extends Array {
    isEmpty() {
        return this.length === 0
    }

    /* 'Array.prototype' methods that return a new object use the 'Symbol.species' property as their constructor. */
    static get [Symbol.species]() {
        return PowerArray;
    }
}

let arr = new PowerArray(1, 2, 5, 10, 50)
console.log(`arr.isEmpty(): ${arr.isEmpty()}`)

/* built-in 'filter' method creates new array using 'PowerArray'. */
let filteredArr = arr.filter(item => item > 100);
console.log(`filteredArr.isEmpty(): ${filteredArr.isEmpty()}`)

/* here's what the 'filter' method accessed behind the scenes. */
console.log(arr.constructor[Symbol.species])

/* when built-in classes extend each other, */
/* they do not set prototypes on their constructors. */

/* in other words, built-in classes do not inherit static */
/* properties from each other. */

/* uncomment the code below to prove this: */
/* console.log(Array.keys([1, 2, 3])) */

/* our classes, however, do inherit static properties. */
console.log(`PowerArray.isArray([1, 3, 5]): ${PowerArray.isArray([1, 3, 5])}`)