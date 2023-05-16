/* javascript does not use dynamic binding for normal variables. */

function outer() {
    let x = 3

    function useouter() {
        return 1 + x
    }

    function useinner() {
        let x = 0
        return useouter()
    }


    return useinner()
}

console.log(outer())

/* the main exceptions are 'this' and 'arguments'. */

/* 'this' cannot be changed within a function. */

const a = {name: 'a'}
const b = {name: 'b'}

/* instead of using 'func.call' and 'func.apply' */
/* for the same object over and over again, call */
/* 'func.bind' once. it returns a bound version */
/* of a function. */

const x = function() {
    console.log(this.name)
}

const y = x.bind(a)
y() /* all calls to 'y' have 'this' set to 'a'. */

/* 'func.bind' also accepts arguments. they are the */
/* first passed arguments to the function. */
const z = function(a, b) {
    console.log(a + b)
}

const c = z.bind(null, 2)
c(3) /* all calls to 'c' have first parameter set to 2. */

/* 'this' is permanently set by 'func.bind'. even */
/* if a method is called through its parent object, */
/* 'this' won't change. */
const d = {name: 'mr.'}

a.hi = function() {console.log(`hi, ${this.name}`)}
a.hi = a.hi.bind(d)

a.hi()