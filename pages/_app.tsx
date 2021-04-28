import './globals.css'
import App from 'next/app'
import { Provider } from 'next-auth/client'
import { ApolloProvider } from '@apollo/client';
import { useApollo } from "@lib/apollo"
import Layout from "@components/Layout"

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    const apolloClient = useApollo(pageProps.initialApolloState)

    return (
      <Provider session={pageProps.session}>
        <ApolloProvider client={apolloClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </Provider>
    )
  }
}

export default MyApp