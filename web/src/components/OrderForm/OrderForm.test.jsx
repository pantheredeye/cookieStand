import { render } from '@redwoodjs/testing/web'

import OrderForm from './OrderForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('OrderForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OrderForm />)
    }).not.toThrow()
  })
})
