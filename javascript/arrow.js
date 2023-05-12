'use strict'

/* arrow functions do not have 'this'. */
/* they permanently bind to the nearest one */
/* in their definition. */

/* the same is true for 'arguments'. */

const agent = {
    name: 'fairmount',
    hi() {
        const x = () => {
            console.log(`hi, my name is agent ${this.name}.`)
            console.log(arguments)
        }
        return x
    },
}

const x = agent.hi(1, 2, 3)
x()