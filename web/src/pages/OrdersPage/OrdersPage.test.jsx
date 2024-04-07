import { render } from '@redwoodjs/testing/web'

import OrdersPage from './OrdersPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('OrdersPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OrdersPage />)
    }).not.toThrow()
  })
})
