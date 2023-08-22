import { render } from '@redwoodjs/testing/web'

import UpdateOrderStatus from './UpdateOrderStatus'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UpdateOrderStatus', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UpdateOrderStatus />)
    }).not.toThrow()
  })
})
