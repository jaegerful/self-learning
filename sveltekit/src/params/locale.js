/* matchers validate route parameters. */
/* matchers are placed in a separate 'params' directory. */

/* the names of their corresponding files are used. */
/* for example, the name of this specific matcher is 'locale'. */

export function match(value) {
    return /^en-us|fr-fr$/i.test(value)
}