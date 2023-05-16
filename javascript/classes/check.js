/* the 'instanceof' operator lets us know */
/* if an object is an instance of a class. */

class Rabbit {}
let Peter = new Rabbit()

console.log(`Rabbit.prototype: ${Rabbit.prototype}`)
console.log(`Peter instanceof Rabbit: ${Peter instanceof Rabbit}\n`)

/* it returns 'true' even for child classes of */
/* the specified class. */

class SnowRabbit extends Rabbit {}
let Snowy = new SnowRabbit()

console.log(`Snowy instanceof Rabbit: ${Snowy instanceof Rabbit}`)

/* unsurprisingly, 'instanceof' works with */
/* simple constructors. */

function Potato() {}
let Jack = new Potato()

console.log(`Jack instanceof Potato: ${Jack instanceof Potato}`)

/* unsurprisingly again, it works with built-in */
/* classes. */

let nums = [1, 2, 3]
console.log(`nums instanceof Array: ${nums instanceof Array}`)

/* 'instanceof' works by comparing objects in */
/* the prototype chain with 'desiredClass.prototype'. */

/* to customize 'instanceof', include a 'Symbol.hasInstance' */
/* static method in the corresponding class. */

class Human {
    static [Symbol.hasInstance](obj) {
        if (obj.breathes === true)
            return true

        return false
    }
}

let random = {
    breathes: true,
}

console.log(`random instanceof Human: ${random instanceof Human}`)

/* all constructors inherit from 'Function.prototype'. */
/* 'Function.prototype' itself inherits from 'Object.prototype'. */

/* we can use 'objA.isPrototypeOf(objB)' to check if 'objA' */
/* is in the prototype chain of 'objB'. */

console.log(`Rabbit.prototype.isPrototypeOf(Snowy): ${Rabbit.prototype.isPrototypeOf(Snowy)}\n`)

/* 'Symbol.toStringTag' customizes the output of 'Object.prototype.toString'. */

let meat = {
    cow: true,
    [Symbol.toStringTag]: 'Cow',
}

console.log(meat.toString())

/* 'Symbol.toStringTag' can be anywhere in the prototype chain. */

let barry = Object.create(meat, {
    eats: {
        value: true,
    }
})

console.log(barry.toString())

/* 'Object.prototype.toString' works for all data types */
/* when they're passed as contexts. with 'Symbol.toStringTag', */
/* 'Object.prototype.toString' becomes a customizable */
/* alternative to 'typeof'. */