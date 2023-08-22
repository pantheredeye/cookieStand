import { render } from '@redwoodjs/testing/web'

import InventoryItem from './InventoryItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InventoryItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InventoryItem />)
    }).not.toThrow()
  })
})
