import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline } from '@mui/material'
import { store } from '@/store/store'
import { Provider } from 'react-redux'
import ThemeLayout from '@/Layout/Theme'


export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Provider store={store}>
      <ThemeLayout>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeLayout>
    </Provider>
  </>
}
