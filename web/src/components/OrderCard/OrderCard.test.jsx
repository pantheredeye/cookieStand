import { render } from '@redwoodjs/testing/web'

import Ordercard from './Ordercard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Ordercard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Ordercard />)
    }).not.toThrow()
  })
})
