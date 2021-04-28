import './globals.css'
import App from 'next/app'
import { Provider } from 'next-auth/client'
import { ApolloProvider } from '@apollo/client';
import { useApollo } from "@lib/apollo"
import SiteLayout from "@components/layouts/SiteLayout"

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    const apolloClient = useApollo(pageProps.initialApolloState)

    // Site Layout based on https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/
    const getLayout = Component.getLayout || ((page:any) => <SiteLayout children={page}></SiteLayout>)

    return getLayout( 
      <Provider session={pageProps.session}>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Provider>
    )
  }
}

export default MyApp