/* a constructor's 'prototype' property is used as */
/* the prototype for newwly-created objects. */

const creature = {
    breathes: true,
}

function Rabbit(name) {
    if (new.target) /* if used as constructor. */
        this.name = name
}

Rabbit.prototype = creature

const Peter = new Rabbit('Peter Rabbit')
console.log(`${Peter.name} breathes: ${Peter.breathes}.`)

/* it's important to note that the constructor itself doesn't */
/* inherit from 'prototype'. only the new object does. */

console.log()

/* furthermore, every function has a default 'prototype' value. */
/* it's an object with one property: 'constructor'. */

/* 'constructor' is a reference to the function itself. */
/* here's a visualization: */

/* creature.prototype = {constructor: creature} */

/* in other words, newly-created objects would inherit */
/* from an object with one property: 'constructor'. */
/* they don't inherit from actual constructor, though. */

const Terminator = function() {
    this.fights = true
}

const descriptors = Object.getOwnPropertyDescriptors(Terminator.prototype)

console.log(`Terminator.prototype inherits from Object.prototype: ${Terminator.prototype.__proto__ === Object.prototype}.\n`)
console.log(`properties in default Terminator.prototype:`)

for (let key in descriptors)
    console.log(`${key}: ${Terminator.prototype[key]}`)

/* the 'constructor' property can be used instead of the actual constructor. */

let first = new Terminator()
first.fights = false

let second = new (first.constructor)() /* 'new' context supersedes context set by 'first'. */

console.log(`first.fights === false: ${first.fights === false}`)
console.log(`second.fights === true: ${second.fights === true}`)

console.log();

/* if called without 'new', 'first' is modified by constructor again. */
(first.constructor)()
console.log(`first.fights === true: ${first.fights === true}`)