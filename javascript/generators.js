'use strict'

console.log()

/* how to create a generator. */

function* numerical_sequence() {
    yield 'a'
    yield 'b'
    /* return 'c' */ /* makes '{done: true}'. */
    yield 'c'
}

/* when you invoke a generator, an iterator object is returned. */

const first_numerical_sequence_iterator = numerical_sequence()

/* this iterator object is identical to the iterator of an iterable. */

/* in other words, the iterator has a 'next' method which returns */
/* '{done: Boolean, value: any}'. */

console.log(`1. using the 'next' method:\n`)

for (let i = 0; i < 3; ++i) {
    const result = first_numerical_sequence_iterator.next()
    console.log(`result ${i + 1}: ${JSON.stringify(result, null, 2)}\n`)
}

/* the generator itself does not have 'Symbol.iterator'. only its */
/* iterator does, and its 'Symbol.iterator' simply returns the */
/* iterator itself. */

/* in other words, only the iterator of a generator can be used in */
/* a 'for..of' loop. */

const second_numerical_sequence_iterator = numerical_sequence()

console.log(`2. using a 'for..of' loop:\n`)

for (let value of second_numerical_sequence_iterator) { /* only prints values when '{done: false}' */
    console.log(`value: '${value}'`)
}

console.log()

/* the code in the generator continues to execue until the next */
/* 'yield' or 'return' statement. */

/* we can use this behavior to operate loops and other constructs */
/* inside the generator. */

function* loop_sequence() {
    for (let i = 10; i < 16; ++i) {
        yield i
    }
}

console.log(`3. using a generator with a loop:\n`)

for (let value of loop_sequence()) {
    console.log(`value: ${value}`)
}

console.log()

/* generator composition is the feature of embedding */
/* generators inside another generator. */

/* here's how to create a composite generator: */

function* composite_generator() {
    yield* numerical_sequence() /* this 'yield*' statement says, 'print all values yielded by this numerical_sequence() iterator'. */
    yield* loop_sequence()
}

console.log(`4. using a composite generator:\n`)

for (let value of composite_generator()) {
    console.log(`value: ${value}`)
}

console.log()

/* a generator can accept values from invoking code. */
/* these values are passed as arguments to the 'next' method. */

function* bidirectional_generator() {
    let sum = 0
    let flag = true

    while (flag) {
        flag = yield sum-- /* arguments to 'next' method stored in 'flag'. */
    }
}

const first_bidirectional_generator_iterator = bidirectional_generator()

console.log(`using a bidirectional yield statement:\n`)

{
    const result = first_bidirectional_generator_iterator.next() /* first call to 'next' should not have argument. */
    console.log(`value: ${result.value}`)
}

for (let i = 0; i < 10; ++i) {
    const result = first_bidirectional_generator_iterator.next(true) /* mark flag as 'true'. */
    console.log(`value: ${result.value}`)
}

console.log()

/* 'iterator_for_generator.throw' is used to throw an exception in */
/* the current line of the generator. */

function* dumb_generator() {
    try {
        let result = yield 'yes'
    }
    catch {
        console.log(`error in generator was handled by catch block.`)
    }
}

const dumb_generator_iterator = dumb_generator()

console.log(`using try..catch block in generator:`)

dumb_generator_iterator.next()
dumb_generator_iterator.throw(new Error('error in generator'))

console.log()

/* 'iterator_for_generator.return([argument])' is used to complete the */
/* iteration of a generator, either with or without a value. */

const second_bidirectional_generator_iterator = bidirectional_generator()

console.log(`using 'iterator_for_generator.return':\n`)

{
    const result = second_bidirectional_generator_iterator.return('iteration completed.')
    console.log(JSON.stringify(result, null, 2))
}

console.log()