import { render } from '@redwoodjs/testing/web'

import OrderDetailItem from './OrderDetailItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('OrderDetailItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OrderDetailItem />)
    }).not.toThrow()
  })
})
