class Clock {
    /* private fields must be declared here, */
    /* even if initialized in constructor. */

    /* these declarations let the engine determine */
    /* if a method can access a given private field. */

    #template
    #timer

    constructor({template}) {
        this.#template = template
    }

    #render() {
        let date = new Date()
  
        let hours = date.getHours()
        if (hours < 10) hours = '0' + hours
    
        let mins = date.getMinutes()
        if (mins < 10) mins = '0' + mins
    
        let secs = date.getSeconds()
        if (secs < 10) secs = '0' + secs
    
        let output = this.#template
          .replace('h', hours)
          .replace('m', mins)
          .replace('s', secs)
    
        console.log(output)
    }

    stop() {
        clearInterval(this.#timer)
      }
    
    start() {
        this.#render()
        this.#timer = setInterval(this.#render.bind(this), 1000)
    }
}
  
/* methods must access each other by using 'this'. */

const clock = new Clock({
    template: 'h:m:s',
})

clock.start()