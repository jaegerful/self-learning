'use strict'

/* modules support the 'import' and 'export' keywords. */

/* in the browser, we must add the attribute [type = 'module'] to treat a script as a module. */
/* in node, we should add the property {type: 'module'} in 'package.json' to treat scripts as modules. */

/* in the browser, import paths are resolved to urls. thus, modules in the browser only work properly under http. */
/* in node, import paths traverse filesystems. */

/* modules always operate in strict mode. */
/* unless exported, constructs are inaccessible to other modules. */

/* modules only execute once. then, for subsequent imports, the same contructs are exported. */

/* what about reassigning exports? */