import { useRef } from 'react'

import Hyperbeam from '@hyperbeam/web'

import { useLocation } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { COMPANIES } from './companies'

const RapidReviewPage = () => {
  const hyperbeamRef = useRef()
  const rrRef = useRef()
  const location = useLocation()

  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  })
  const embedURL = params.embed // "some_value"

  function surprise() {
    const random = COMPANIES[Math.floor(Math.random() * COMPANIES.length)]
    hyperbeamRef.current.tabs.update({ url: `https://${random.domain}` })
  }

  async function startNewInstance() {
    if (!embedURL) return
    hyperbeamRef.current = await Hyperbeam(rrRef.current, embedURL)
  }

  return (
    <>
      <MetaTags title="RapidReview" description="RapidReview page" />
      <button onClick={startNewInstance}>Start RapidReview</button>
      <button onClick={surprise}>Random Website</button>
      <div
        ref={rrRef}
        id="virtualComputerDiv"
        style={{ height: '720px', width: '1280px' }}
      />
    </>
  )
}

export default RapidReviewPage
