import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return( 
    <html data-theme="emerald">
      <Component  {...pageProps} />
    </html>
  )
}

export default MyApp
