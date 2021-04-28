import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { useMemo } from "react"

// Saved apolloClient for the duration of this request
let apolloClient, token

const createApolloClient = () => {
  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  });
  
  const authLink = setContext((_, { headers }) => {
    if(token) {
      console.log('authLink / setContext / token already exists')
      return {
        headers: {
          ...headers,
          ...{ authorization: `Bearer ${token}` }
        }
      }
    }
    console.log('authLink / setContext / no token')
    let promise = new Promise((resolve, reject) => {
      fetch('/api/auth/session').then((response) => {
        const session = response.json().then((parsedToken) => {
          token = parsedToken.token
          const auth = token ? { authorization: `Bearer ${token}` } : {}
          resolve({
            headers: {
              ...headers,
              ...auth
            }
          });
        })
      })
    })
    return promise
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });
}


// from https://github.com/vercel/next.js/blob/canary/examples/api-routes-apollo-server-and-client/apollo/client.js
export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(initialState) {
  return initializeApollo(initialState, [initialState])
}