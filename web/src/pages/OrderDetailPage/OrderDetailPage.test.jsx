import { render } from '@redwoodjs/testing/web'

import OrderDetailPage from './OrderDetailPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('OrderDetailPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OrderDetailPage />)
    }).not.toThrow()
  })
})
