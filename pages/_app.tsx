import '../styles/globals.css'
import type { AppProps } from 'next/app'

// componets
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <html data-theme="emerald">
      <Layout>
        <Component  {...pageProps} />
      </Layout>
    </html>
  )
}

export default MyApp
