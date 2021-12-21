import React from 'react';
import { SWRConfig } from 'swr';
import fetchJson from '../lib/fetchJson';
import GlobalStyle from '../src/globalStyle';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher: fetchJson, onError: (err) => { console.error(err) }}}>
      <GlobalStyle />
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default MyApp
