import './globals.css'
import App from 'next/app'
import { Provider } from 'next-auth/client'
import { ApolloProvider } from '@apollo/client';
import { useApollo } from "@lib/apollo"

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    const apolloClient = useApollo(pageProps.initialApolloState)

    return (
      <Provider session={pageProps.session}>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Provider>
    )
  }
}

export default MyApp