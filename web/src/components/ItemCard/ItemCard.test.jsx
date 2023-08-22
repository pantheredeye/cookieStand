import { render } from '@redwoodjs/testing/web'

import ItemCard from './ItemCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ItemCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ItemCard />)
    }).not.toThrow()
  })
})
