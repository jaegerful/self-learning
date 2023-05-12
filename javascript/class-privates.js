'use strict'

/* classes support private properties. */
/* by default, properties are public. */

/* private properties can only be directly accessed  */
/* by other properties of the same class. */

/* in other words, an object cannot directly access it, */
/* nor can a child class. only methods of the class */
/* with the private property can access it. */

class Animal {
    #breathes = true

    breathes() {
        return this.#breathes
    }
}

/* uncomment below to prove child class doesn't have access. */

/* class Elephant extends Animal {
    get breathes() {
        return this.#breathes
    }
} */

const creature = new Animal()

/* uncomment below to prove that object doesn't have access. */
/* creature.#breathes */

console.log(`#breathes accessor: ${creature.breathes()}\n`)

/* private properties cannot be overriden. */

/* this is to uphold the rule that child classes */
/* cannot directly modify private fields. */

class Monkey extends Animal {
    #breathes = false
}

const sid = new Monkey()
console.log(`attempt to override #breathes: ${sid.breathes()}\n`)


/* properties prefixed by an underscore are treated */
/* as 'protected'. only child classes should access */
/* them and no external code. */

/* they're not truly protected, though, so be careful. */

class Engine {
    _power = 0

    constructor(power) {
        this._power = power ?? this.__power
    }
}

/* how to make a constant field: */

class CoffeeMachine {
    constructor(water) {
        Object.defineProperty(this, '_water', {
            value: water,
            writable: false,
            enumerable: false,
            configurable: false,
        })
    }

    potato = 'lays'
}

let machine = new CoffeeMachine(80)
console.log(`constant field: ${machine._water}\n`)

/* uncomment to prove '_water' is constant. */
/* machine._water = 28 */

/* fields by default are enumerable. */
for (let key in machine)
    console.log(`${key}: ${machine[key]}`)