'use strict'

/* there are different ways to make a template for objects. */
/* we may use prototypes, stand-alone constructors, or classes. */

/* classes, unlike object literals, don't require commas. */

class MyFirstClass {
    constructor(value) {
        this.name = value
    }

    method1() {
        console.log(this.name)
        /* y = 3 */
    }

    method2() {
        console.log(`what is your name?`)
    }
}

/* under the hood, a class is a function. */
console.log(`'MyFirstClass' is a ${typeof MyFirstClass}.\n`)

/* what javascript does is label the constructor 'MyFirstClass', */
/* then add all methods to the 'MyFirstClass.prototype'. */

let x = new MyFirstClass('x')

x.method1()
console.log(`x.method1 === MyFirstClass.prototype.method1: ${x.method1 === MyFirstClass.prototype.method1}\n`)

/* a class constructor throws an error when used as a normal function. */
/* uncomment the code below. */

/* MyFirstClass() */

/* 'synctatic sugar' - a new language feature that could be easily substituted with existing features */
/* classes are mostly synctatic sugar, with a few exceptions: */

/* the constructor itself has a special 'toString' method. */
console.log(`${MyFirstClass.toString()}\n`)

/* by default, class methods are non-enumerable. */
for (let key in x)
    console.log(`${key}: ${x[key]}`)

console.log()

/* class constructors and methods operate in strict mode. */
/* uncomment the assignment in the above class. */

/* class expressions are valid. */
/* named class expressions are valid. */
/* we can use these features to make a class generator. */
/* yes, a template for object templates! */

function makeClass(catchphrase) {
    return class character {
        chat() {
            console.log(`see ya. oh, and also: ${catchphrase}.`)
        }
    }
}

const Charm = makeClass('third time\'s the charm')
const lucky = new Charm()

lucky.chat()

console.log()

/* classes can have getter and setter methods. */

/* classes can also have fields. */
/* class fields and methods can have computed names, just as object literals. */

class User {
    name = 'Johan'
}

/* fields are included as properties of the new object. */
/* they are not part of the class constructor's prototype. */

/* my guess is that they become part of the class constructor. */

let me = new User()

console.log(`'name' is part of 'me': ${me.hasOwnProperty('name')}`)
console.log(`'name' is part of 'User.prototype': ${User.prototype.hasOwnProperty('name')}\n`)

/* how to bind a method. */
class Template {
    constructor() {
        this.name = 'Spartacus'
        this.introduce = this.introduce.bind(this)
    }

    /* 'Template.prototype' is set for new object before invoking of constructor. */
    introduce() {
        console.log(`hi, my name is ${this.name}`)
    }
}

let instance = new Template()
let method = instance.introduce

console.log(`instance.introduce !== Template.prototype.introduce: ${instance.introduce !== Template.prototype.introduce}`)
method()

console.log()

/* a more straightforward way. */
class Template2 {
    name = 'Spartacus'

    /* since arrow functions can't have 'this', 'this' permanently */
    /* binds to the constructor's 'this'. */
    introduce = () => console.log(`hello fool, my name is ${this.name}.`)
}

let instance2 = new Template2()

method = instance2.introduce
method()
instance2.name = 'Paddington'
method()
