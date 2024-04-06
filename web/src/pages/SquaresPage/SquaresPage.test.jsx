import { render } from '@redwoodjs/testing/web'

import SquaresPage from './SquaresPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SquaresPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SquaresPage />)
    }).not.toThrow()
  })
})
