/* we should always make our custom errors */
/* inherit from the built-in 'Error' class. */

/* this way, 'customError instanceof Error' works. */

class ValidationError extends Error {
    constructor(objName, missingProp) {
        const message = `'${objName}' is missing '${missingProp}' property.`
        super(message)

        this.name = this.constructor.name /* exploit the fact that 'this.constructor' is 'ValidationError'. */
    }
}

function readUser(string) {
    try {
        const user = JSON.parse(string)

        if (user.name === undefined)
            throw new ValidationError('user', 'name')

        if (user.age === undefined)
            throw new ValidationError('user', 'age')

        console.log(`string parsed successfully.`)
    }
    catch(error) {
        console.log(`${error.name}: ${error.message}`)
    }
}

console.log()
readUser('{ "age": 25 }')
readUser('{ "name": "johan", "age": 25 }')
console.log()