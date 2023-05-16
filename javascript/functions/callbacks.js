/* asynchronous code - code that does something concurrent to the main thread */
/* (i.e., concurrent to the script file). */

/* for example, scheduling a function to run later with 'setTimeout' */
/* is asynchronous. you're scheduling a function to run concurrently */
/* in the future. */

setTimeout(() => {
    console.log(`this is an asynchronous function!`)
}, 1000)

/* you may want to do something after asynchronous code executes. */
/* one approach is to provide callbacks for event listeners. */

function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`script load error for ${src}.`));
  
    document.head.append(script);
}

loadScript('./class-inheritance.js', function(error, script) {
    /* callback for 'loadScript'. */
    
    if (error) {
        console.log(`${error.name}: ${error.messsage}`)
        return
    }

    console.log(`script loaded successfully!`)
    /* possibly load another script... */
})

/* 'callback hell' or the 'pyramid of doom' occurs when */
/* callbacks have their own callbacks, and so on... */

/* this happens when we have a chain of asynchronous code, */
/* which need to execute in sequence, after each piece */
/* finishes executing. */

/* for this reason, the recursive approach */
/* to chain asynchronous code is frowned on. */