import gsap from 'gsap'

gsap.set('img', {
    transformOrigin: '50% 50%'
})

gsap.to('img', {
    duration: 2,
    ease: 'step',

    width: '200px',
    height: '200px',
})