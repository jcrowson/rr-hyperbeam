import type { ComponentMeta } from '@storybook/react'

import RapidReviewPage from './RapidReviewPage'

export const generated = () => {
  return <RapidReviewPage />
}

export default {
  title: 'Pages/RapidReviewPage',
  component: RapidReviewPage,
} as ComponentMeta<typeof RapidReviewPage>
