import { render } from '@redwoodjs/testing/web'

import InventoryPage from './InventoryPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('InventoryPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InventoryPage />)
    }).not.toThrow()
  })
})
