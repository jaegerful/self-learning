'use strict'

/* javascript does not use dynamic scoping for normal variables. */

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

/* the main exception is 'this'. */