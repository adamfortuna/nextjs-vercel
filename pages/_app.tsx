import './globals.css'
import App from 'next/app'
import { Provider } from 'next-auth/client'
import { ApolloProvider } from '@apollo/client';
import { useApollo } from "@lib/apollo"
import { ThemeProvider } from 'next-themes'
import LayoutWrapper from "../layouts/layout-wrapper";

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    const apolloClient = useApollo(pageProps.initialApolloState)

    return (
      <Provider session={pageProps.session}>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider defaultTheme="dark" attribute="class">
            <LayoutWrapper {...pageProps}>
              <Component {...pageProps} />
            </LayoutWrapper>
          </ThemeProvider>
        </ApolloProvider>
      </Provider>
    )
  }
}

export default MyApp