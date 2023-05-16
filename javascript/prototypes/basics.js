/* every object has a hidden property labelled '[[Prototype]]'. */
/* '[[Prototype]]' is either set to 'null' or another object. */

/* by default, '[[Prototype]]' is set to 'Object.prototype'. */

/* when an object is missing a property, the engine searches */
/* in '[[Prototype]]' for it. it's a recursive search. */

/* even though '[[Prototype]]' is hidden, we can use the */
/* '__proto__' accessor to modify it. */

/* if '__proto__' is assigned a value other than 'null' */
/* or an object, the assignment is ignored. */

let human = {
    breathes: true,
    name: 'human',

    intro() {
        console.log(`my name is: ${this.name}.`)
    }
}

let johan = {
    annoys: true,
    name: 'johan',
}

console.log(`before specifying prototype:`)
console.log(johan.__proto__)

console.log()
johan.__proto__ = human

console.log(`after specifying prototype:`)
console.log(johan.__proto__)

console.log()

human.intro()
johan.intro()

console.log()

/* prototypes are never modified. instead, the updated values */
/* are added to the child object. */

johan.breathes = false
console.log(`johan.breathes !== human.breathes: ${johan.breathes !== human.breathes}`)

console.log()

/* when a virtual property is modified, however, the engine is smart enough to use an accessor */
/* from the prototype chain. even here, though the prototype is left intact, as the new values */
/*  are added to the child object. */

/* in other words, accessor properties aren't rewritten with simple assignments. */

Object.defineProperty(human, 'meta', {
    get() {
        return `${this.name} can breathe: ${this.breathes}.`
    },
    set(values) {
        values = values.split(' ')
        values[1] = eval(values[1]);
        [this.name, this.breathes] = values
    },
    enumerable: false,
    configurable: true,
})

johan.meta = 'adriel false'

console.log(human.meta)
console.log(johan.meta)

console.log()

/* 'for...in' lists inherited properties as well. */
/* of course, they must be marked as enumerable. */

console.log(`keys from for...in loop:`)

for (let key in johan)
    console.log(`   ${key}`)

console.log()

/* to only list properties that are part of the child object */
/* use the 'hasOwnProperty' method from 'Object.prototype'. */

console.log(`filtered keys from for...in loop:`)

for (let key in johan) {
    if (johan.hasOwnProperty(key))
        console.log(`   ${key}`)
}

/* all properties from 'Object.prototype' are non-enumerable. */