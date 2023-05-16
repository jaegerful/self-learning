/* accessors help us make virtual properties. */
/* in other words, properties that don't exist. */

/* accessors consist of 'getters' and 'setters'. */
/* they are declared just as methods, but with a special keyword before them. */

let user = {
    first: 'tom',
    last: 'scott',

    get full() {
        return `${this.first} ${this.last}`
    },

    set full(value) {
        [this.first, this.last] = value.split(' ') /* pushes everything to left of separator. */
    },
}

/* using getter. */
console.log(user.full)

/* using setter. */
user.full = 'maribelle wilkins'
console.log(user.full)

console.log()

/* descriptors for accessor properties have differenct content. */
const descriptor = Object.getOwnPropertyDescriptor(user, 'full')
console.log(descriptor)

console.log()

/* when built-in methods access virtual properties,  */
/* they use their 'get' methods. */
for (let key in user)
    console.log(`${key}: ${user[key]}`)

/* accessors can be used as gateway checks */
/* for their underlying real properties. */
/* this way, such properties won't get assigned */
/* troublesome values. */