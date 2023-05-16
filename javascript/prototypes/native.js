/* '{}' invokes 'new Object()' behind the scenes. */
/* thus, the literal's prototype is 'Object.prototype'. */

const first = {}

if (first.toString === Object.prototype.toString)
    console.log(`first.toString === Object.prototype.toString.\n`)

/* engine throws error if this is deleted and object included in string: */
/* delete Object.prototype.toString */

first[Symbol.toPrimitive] = (hint) => {
    switch(hint) {
        case 'string':
            return 'this is first.'
        case 'number':
            return 1
        case 'default':
            return 'default value'
    }
}

console.log(`${first}\n`)

/* 'Object.prototype' does not inherit from anything else. */
console.log(`Object.prototype.__proto__ = ${Object.prototype.__proto__}\n`)

/* built-in constructors have 'prototype' properties that contain useful attributes. */
/* since these prototypes are objects, they inherit from 'Object.prototype'. */

if (Array.prototype.__proto__ === Object.prototype)
    console.log(`Array.prototype.__proto__ === Object.prototype\n`)

const second = () => {}

if (second.__proto__ === Function.prototype)
    console.log(`second.__proto__ === Function.prototype\n`)

/* in other words, 'Object.prototype' is the parent of all objects. */

/* it is bad practice to modify native prototypes */
let third = 'a tea party'
String.prototype.show = function() {console.log(`${this}\n`)}

third.show()

/* however, it is acceptable for polyfilling. */
if (!Number.prototype.jaeger) {
    Number.prototype.jaeger = function() {
        console.log(`${this} is a jaeger.`)
    }
}

21..jaeger()

/* 'null' and 'undefined' don't have constructors. */