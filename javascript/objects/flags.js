/* each property has three flags: writable, enumerable, and configurable. */
let me = {
    name: 'johan',
    age: 21,
}

/* by default, they're all true for a property. */

/* a descriptor is a list of all information pertaining to a property. */
/* in other words, the property's value and configuration flags. */

let descriptor = Object.getOwnPropertyDescriptor(me, 'name')
console.log(`default flags:`)
console.log(descriptor)

console.log()

/* to change a property's flags, use 'Object.defineProperty'. */

/* when used on an already-existing property, only the provided */
/* flags are updated. when used to create a new property, missing */
/* flags are set to false. */

Object.defineProperty(me, 'name', {
    writable: false,
})

descriptor = Object.getOwnPropertyDescriptor(me, 'name')
console.log(`modified flags:`)
console.log(descriptor)

console.log()

/* non-writable properties can't be reassigned to new value. */
try {
    me.name = 'stacy'
}
catch {
    console.log(`tried to reassign non-writable property!`)
    console.log()
}

/* non-enumerable properties aren't included in 'for...in' loops */
/* or built-in static 'Object' methods (e.g. 'Object.keys'). */

/* in other words, built-in tools ignore such properties */
/* (much like symbolic properties). */

console.log(`'enumerable' flag for toString set to true:`)

me.toString = function() {return `${this.name} is ${this.age}.`}

for (let key in me)
    console.log(`   ${key}`)

console.log()

console.log(`'enumerable' flag for toString set to false:`)

Object.defineProperty(me, 'toString', {
    enumerable: false,
})

for (let key in me)
    console.log(`   ${key}`)

console.log()

/* non-configurable properties can't be deleted. */
/* furthermore, none of their flags (including */
/* 'configurable' itself) can be changed. */

/* in other words, the property is frozen in time. */

Object.defineProperty(me, 'name', {
    configurable: false,
})

try {
    Object.defineProperty(me, 'name', {
        configurable: true,
    })
}
catch {
    console.log(`non-configurable property cannot have different flag values.`)
    console.log()
}

/* 'Object.defineProperties' lets you provide descriptors */
/* for multiple properties. */

/* just like 'Object.defineProperty', it updates existing properties */
/* and creates new ones. */

Object.defineProperties(me, {
    age: {value: '12'},
    birthday: {value: 'june', writable: false, enumerable: true, configurable: false},
    profession: {value: 'coder', writable: true, enumerable: true, configurable: false},
})

console.log(`add properties with 'Object.defineProperties':`)
for (let key in me)
    console.log(`   ${key}: ${me[key]}`)

/* to get all properties with their descriptors, */
/* use 'Object.getOwnPropertyDescriptors'. the result */
/* is an object. */

Object.getOwnPropertyDescriptors(me)

/* we have no way of seeing it, but 'Object.getOwnPropertyDescriptors' */
/* includes symbolic properties as well. */

console.log()

/* we can use 'Object.getOwnPropertyDescriptors' and 'Object.defineProperties' */
/* to clone an object, including its property flags. */

const clone = {}
Object.defineProperties(clone, Object.getOwnPropertyDescriptors(me))

console.log(`cloned object:`)
for (let key in clone)
    console.log(`   ${key}: ${clone[key]}`)

console.log()

/* a simple 'clone[key] = me[key]' simply copies the value, */
/* but no flags of the property. */

const another = {}
another.name = me.name /* 'me.name' is non-writable. */

try {
    another.name = 'george'
    console.log(`another.name was reassigned to ${another.name}`)
}
catch {
    console.log(`another.name is not writable, just like me.name`)
}