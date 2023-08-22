import { render } from '@redwoodjs/testing/web'

import OrderItem from './OrderItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('OrderItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OrderItem />)
    }).not.toThrow()
  })
})
