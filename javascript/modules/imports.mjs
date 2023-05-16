/* how to import specific constructs from a module ('as' is optional). */

import {x as greeting, y as farewell, default as number} from './exports.mjs'

/* how to import everything from a module ('as' is required to avoid naming conflicts). */

import * as exports from './exports.mjs'

/* 'exports.default' is the default export. */

/* another way to access default exports: */

import _ from './exports.mjs'

/* default exports can't be accessed by their actual names: */

/* console.log(exports.e) */

/* import {e} from './exports.mjs' */
/* console.log(e) */

/* constructs can be reexported. */
/* such constructs are unavailable to our code. */

export {person} from './exports.mjs'
/* console.log(`person: ${person}`) */

/* how to reexport a default construct: */
/* 1. w/ name: */ export {default as fifteen} from './exports.mjs'
/* 2. preserve as default: */ export {default} from './exports.mjs'

/* "export fifteen from './exports.mjs'" is invalid. */

/* imports are always hoisted to the top. */
/* to prevent this behavior, use dynamic imports. */

import('./exports.mjs')

/* although they appear that way, dynamic imports are not functions. */
/* they can surprisingly be used in regular scripts. */