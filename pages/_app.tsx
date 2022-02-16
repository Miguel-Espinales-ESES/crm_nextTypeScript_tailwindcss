import '../styles/globals.css'
import type { AppProps } from 'next/app'
// apollo
import { ApolloProvider } from '@apollo/client'
import client from '../config/apollo'

// componets
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div data-theme="emerald">
      <ApolloProvider client={client}>
        <Layout>
          <Component  {...pageProps} />
        </Layout>
      </ApolloProvider>
    </div>
  )
}

export default MyApp
