import '../styles/globals.css'
import type { AppProps } from 'next/app'

// componets
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div data-theme="emerald">
      <Layout>
        <Component  {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
