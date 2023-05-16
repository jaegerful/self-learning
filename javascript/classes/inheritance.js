/* classes can inherit from each other. */
/* in other words, their prototypes are part of a chain. */

class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    birthday() {
        ++this.age
        console.log(`${this.name} is ${this.age} years old.`)
    }
}

class Whale extends Animal {
    noise() {
        console.log(`ooaaa`)
    }
}

/* in the above example, 'Whale.prototype' chains to 'Animal.prototype'. */
console.log(`
Object.getPrototypeOf(Whale.prototype) === Animal.prototype: ${Object.getPrototypeOf(Whale.prototype) === Animal.prototype}
`)

/* 'extends' accepts expressions that return a class. */
class Boy extends (() => class {})() {

}

/* when a class overrides methods, it still has access  */
/* to the original ones with 'super'. */

class Human {
    chat() {
        console.log(`hey there.`)
    }
}

class Baby extends Human {
    chat = () => { /* in 'Baby.prototype'. */
        console.log(`waaah!`)

        /* alternative to 'super'. */
        /* Object.getPrototypeOf(Baby.prototype).chat() */

        super.chat()
    }
}

let Ted = new Baby()
Ted.chat()

/* only functions used as methods support 'super'. */
/* uncomment the code below. */

function test() {
    /* super.hey() */
}

/* 'super.method' looks as far back in the prototype chain as it has to. */
/* it uses the same 'this' as its outer function. */

/* if child class has no constructor, the parent's constructor is used. */
console.log()

let Willy = new Whale('Willy', 20)
Willy.birthday()

/* if child class has a constructor, 'super' must be invoked */
/* before 'this' is referenced. why? */

/* unlike normal constructors, derived constructors do not create */
/* an object and set it to 'this'. the base constructors do. */

/* class fields are initialized before the base class constructor */
/* and after 'super' invocations in derived constructors. */

console.log()

/* when a function becomes part of an object (say a prototype), */
/* its '[[HomeObject]]' property gets permanently set to the object. */
/* from here on out, 'super' can be used. no matter where the function */
/* is invoked, from now on 'super.method' will use '[[HomeObject]].__proto__' */
/* to navigate the prototype chain. */

let animal = {
    sayHi() {
      console.log(`I'm an animal`);
    }
}
  
/* 'rabbit' inherits from 'animal'. */
let rabbit = {
    __proto__: animal,
    sayHi() {
        super.sayHi()
    },
}

let plant = {
    sayHi() {
        console.log("I'm a plant");
    }
}

/* toggle to see effect of '[[HomeObject]]'. */
Object.setPrototypeOf(rabbit, plant)

/* 'tree' inherits from plant */
let tree = {
    __proto__: plant,
    sayHi: rabbit.sayHi,
}

tree.sayHi()

/* in object literals, '[[HomeObject]]' is only */
/* set for function declarations. however, in classes, */
/* any kind of function works. see line 44. */