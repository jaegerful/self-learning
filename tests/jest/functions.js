const functions = {
    add: (x, y) => x + y,
    retnull: () => null,
    reflect: x => x,
    create: () => {
        const user = {first: 'Johan', last: 'Jaeger'}
        return user 
    }
}

export default functions