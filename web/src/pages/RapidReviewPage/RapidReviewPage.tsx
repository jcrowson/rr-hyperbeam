import { useEffect, useRef } from 'react'

import Hyperbeam from 'hyperbeam'

import { MetaTags } from '@redwoodjs/web'

const RapidReviewPage = () => {
  const rrRef = useRef()

  useEffect(() => {
    init()
  }, [])

  async function init() {
    console.log('hre')
    const resp = await fetch('/hyperbeam')
    const data = await resp.json()
    console.log(data)
    // const hb = await Hyperbeam(rrRef, data.embed_url)
  }

  return (
    <>
      <MetaTags title="RapidReview" description="RapidReview page" />
      <div
        ref={rrRef}
        id="virtualComputerDiv"
        style={{ height: '720px', width: '1280px' }}
      />
    </>
  )
}

export default RapidReviewPage
