/* '__proto__' is discouraged. instead, 'Object.getPrototypeOf' */
/* and 'Object.setPrototypeOf' are modern alternatives. */

const plant = {
    combustible: true,
}

let tree = {}
Object.setPrototypeOf(tree, plant)

console.log(`tree.combustible: ${tree.combustible}`)

/* the only time '__proto__' is tolerated */
/* is inside object literals. */

const obsidian = {
    combustible: false,

    _caption: '',

    get caption() {
        return this._caption
    },
    set caption(value) {
        this._caption = value
    },
}

tree = {
    caption: 'potatoes grow on this tree', /* accessor from 'obsidian' used. */
    __proto__: obsidian, /* accessor from 'Object.prototype' used. */

    /* in other words, object's prototype is first thing set. */
    /* this is true for the prototypes of class constructors too. */
}

console.log(`tree.combustible: ${tree.combustible}\n`)
console.log(`tree.caption: ${tree.caption}\n`)

/* 'Object.create(prototype, descriptors)' is another way */
/* to create an object. it allows us to specify the prototype */
/* as part of an object's initialization. */

const coal = Object.create(plant, {name: {value: 'coal', writable: false, enumerable: true}})

console.log(`coal.name: ${coal.name}`)
console.log(`coal.combustible: ${coal.combustible}`)

console.log()

/* a map does not store pairs as simple properties. */
/* thus, it can have a '__proto__' pair that is */
/* independent from the map's actual prototype. */

const map = new Map()
map.set('__proto__', 'something')

console.log(map.get('__proto__'))
console.log(map.__proto__)

console.log()

/* a very plain object inherits from 'null'. */
/* thus, it does not have '__proto__' in its chain. */

/* in other words, a very plain can use '__proto__' */
/* as a data property. */

const plain = Object.create(null)
plain.__proto__ = 'a simple string'

console.log(plain.__proto__)

console.log()

/* an alternative to override '__proto__': */

const solution = new Object()

Object.defineProperty(solution, '__proto__', {
    value: 'something verbose',
    writable: true,
})

console.log(solution.__proto__)
solution.__proto__ = 'hallelujah'
console.log(solution.__proto__)
