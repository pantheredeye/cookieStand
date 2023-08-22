import { render } from '@redwoodjs/testing/web'

import UpdateItemQuantity from './UpdateItemQuantity'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UpdateItemQuantity', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UpdateItemQuantity />)
    }).not.toThrow()
  })
})
