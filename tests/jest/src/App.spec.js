import {render} from '@testing-library/svelte'

import {writable} from 'svelte/store'
const mockWritable = writable

jest.doMock('./util.js', () => {
    return {
      store: mockWritable('mocked'),
      message: 'herro'
    }
})

test('store successfully retrieved', async () => {  
  const App = await import('./App.svelte')
  const container = render(App)

  container.getByText('mocked')
})