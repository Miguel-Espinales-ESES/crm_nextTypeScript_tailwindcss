// css
import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';

import type { AppProps } from 'next/app'
// apollo
import { ApolloProvider } from '@apollo/client'
import client from '../config/apollo'
// componets
import Layout from '../components/Layout'
// alert
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div data-theme="emerald">
      <ApolloProvider client={client}>
        <ToastContainer />
        <Layout>
          <Component  {...pageProps} />
        </Layout>
      </ApolloProvider>
    </div>
  )
}

export default MyApp
