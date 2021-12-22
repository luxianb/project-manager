import React from 'react';
import { SWRConfig } from 'swr';
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import fetchJson from '../lib/fetchJson';
import GlobalStyle from '../components/globalStyle';
import '../styles/globals.css'

library.add(fas)

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher: fetchJson, onError: (err) => { console.error(err) }}}>
      <GlobalStyle />
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default MyApp
