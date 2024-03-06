import { render } from '@redwoodjs/testing/web'

import ItemQuantityAdjuster from './ItemQuantityAdjuster'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ItemQuantityAdjuster', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ItemQuantityAdjuster />)
    }).not.toThrow()
  })
})
