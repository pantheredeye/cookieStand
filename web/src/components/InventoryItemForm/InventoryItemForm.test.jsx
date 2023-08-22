import { render } from '@redwoodjs/testing/web'

import InventoryItemForm from './InventoryItemForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InventoryItemForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InventoryItemForm />)
    }).not.toThrow()
  })
})
