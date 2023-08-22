import { render } from '@redwoodjs/testing/web'

import AdminOrdersPage from './AdminOrdersPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AdminOrdersPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminOrdersPage />)
    }).not.toThrow()
  })
})
