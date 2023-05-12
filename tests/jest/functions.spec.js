/* each file is a test suite. each test function is a test case (which can be composed of multiple expectations). */

import functions from './functions.js'

test('2 + 2 = 4', () => expect(functions.add(2, 2)).toBe(4)) // expect() returns an object.
test('2 + 2 != 4', () => expect(functions.add(2, 2)).not.toBe(5))
test('\'retnull\' returns null', () => expect(functions.retnull()).toBe(null))
test('\'reflect(false)\' is falsy', () => expect(functions.reflect(false)).toBeFalsy())
test('\'create()\' should have my information', () => expect(functions.create()).toEqual({'first': 'Johan', 'last': 'Jaeger'}))
test('2 < 1600', () => expect(2).toBeLessThan(1600))
test('no \'i\' in \'team\'', () => expect('team').not.toMatch(/i/)) /* regular-expression testing */
test('\'admin\' should be in array', () => expect(['Johan', 'Karen', 'admin']).toContain('admin')) 
test.skip('[a, b, c] has \'b\'', () => expect(['a', 'b', 'c']).toContain('b'))

test.todo('should not let numbers be passed.') /* a future test */ 

/* also test.only() and test.skip()... scope is local file. */

/* expect().toMatchSnapshot()... toMatchInlineSnapshot() is probably better... */

test('testing snapshots', () => {
    expect(1).toMatchSnapshot()
})

test('testing snapshots again', () => {
    expect(5).toMatchSnapshot()
})