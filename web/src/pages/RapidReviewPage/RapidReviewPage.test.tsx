import { render } from '@redwoodjs/testing/web'

import RapidReviewPage from './RapidReviewPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RapidReviewPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RapidReviewPage />)
    }).not.toThrow()
  })
})
