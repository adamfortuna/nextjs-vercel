import './globals.css'
import App, { Container } from 'next/app'
import React from 'react'
import withApolloClient from '@lib/with-apollo-client'
import { ApolloProvider } from '@apollo/client'
import { UserProvider } from '@auth0/nextjs-auth0'

class MyApp extends App {
render () {
  const { Component, pageProps, apolloClient } = this.props
  return (
    <Container>
      <ApolloProvider client={apolloClient}>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </ApolloProvider>
    </Container>
  )
}
}

export default withApolloClient(MyApp)
