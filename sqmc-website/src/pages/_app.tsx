import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return <><Component {...pageProps} /><Script strategy="lazyOnload" src={process.env.NEXT_PUBLIC_TAWK_CONNECT_URL} /></>
}
