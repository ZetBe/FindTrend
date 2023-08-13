'use client'

import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  async function getApi() {
    const data = await fetch(
      'https://openapi.naver.com/v1/datalab/shopping/categories'
    )
    console.log(data)
  }
  useEffect(() => {
    getApi()
  }, [])
  return <p>hi</p>
}

export default MyApp
