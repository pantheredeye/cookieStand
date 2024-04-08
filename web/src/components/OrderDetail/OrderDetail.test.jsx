import { render } from '@redwoodjs/testing/web'

import OrderDetail from './OrderDetail'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('OrderDetail', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OrderDetail />)
    }).not.toThrow()
  })
})
