import { render } from '@redwoodjs/testing/web'

import OrderCard from './OrderCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('OrderCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OrderCard />)
    }).not.toThrow()
  })
})
