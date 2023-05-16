/* modules support the 'import' and 'export' keywords. */

/* in the browser, we must add the attribute [type = 'module'] to treat a script as a module. */
/* in node, we should add the property {type: 'module'} in 'package.json' to treat scripts as modules. */

/* in the browser, import paths are resolved to urls. thus, modules in the browser only work properly under http. furthermore, every path must start w/ '.' or '/'. */
/* in node, import paths traverse filesystems. */

/* modules always operate in strict mode. */
/* unless exported, constructs are inaccessible to other modules. */

/* modules only execute once. then, for subsequent imports, the same contructs are exported. */

/* imported variables can't be reassigned. */

/* 'import.meta' holds the path of the corresponding module. */

console.dir(import.meta)

/* in the browser, external and inline modules are treated as having the 'defer' attribute. */
/* the 'async' attribute can be explicitly set to replace 'defer'. */

/* if there are multiple modules in the browser for the same url, only one of them executes. */

/* if the browser does support modules, scripts w/ the 'nomodule' attribute are ignored. */
/* however, if the browser cannot parse modules, scripts w/ the [type = 'module'] attribute are ignored. */