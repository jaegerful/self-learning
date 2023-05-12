'use strict'

/* classes can have static methods. */
class Algebra {
    static PI() {
        return 3.14
    }

    static what() {
        return this
    }
}

console.log(`
result of static method PI: ${Algebra.PI()}
`)

/* behind the scenes, static methods become */
/* properties of the class constructor. */

/* the value of 'this' is the class constructor */
/* itself, rather than an instance of the class. */

console.log(`
Algebra.what() === Algebra: ${Algebra.what() === Algebra}
`)

/* you can use static methods for actions that */
/* involve one or more instances of a class. */

/* static fields also exist. */
class Book {
    static author = 'Johan'
}

console.log(`
result of static field: ${Book.author}
`)

/* like methods, static fields become properties */
/* of the class constructor. */

/* 'extends' not only sets [[Prototype]] for */
/* 'classConstructor.prototype', but also for */
/* 'classConstructor' itself. 'classConstructor' */
/* inherits from 'parentConstructor'. */

/* thus, static methods are inherited from one */
/* class to the other. */

class Animal {}
class Rabbit extends Animal {}

console.log(`
Object.getPrototypeOf(Rabbit) === Animal: ${Object.getPrototypeOf(Rabbit) === Animal}
`)

