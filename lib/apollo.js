import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { useMemo } from "react"

// Saved apolloClient for the duration of this request
let apolloClient

const createApolloClient = () => {
  console.log('createApolloClient')
  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  });
  
  const authLink = setContext((_, { headers }) => {
    console.log('setContext / headers', headers)
    // return the headers to the context so httpLink can read them
    console.log('authLink', headers)

    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIiLCJzdWIiOiIyIiwibmFtZSI6IkFkYW0gRm9ydHVuYSIsImVtYWlsIjpudWxsLCJwaWN0dXJlIjoiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91Lzc3NDE_dj00IiwiaWF0IjoxNjE5NTYwNjg0LCJleHAiOjE2MTk2NDcwODQsImh0dHBzOi8vaGFzdXJhLmlvL2p3dC9jbGFpbXMiOnsieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJ1c2VyIl0sIngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1yb2xlIjoidXNlciIsIlgtaGFzdXJhLXVzZXItaWQiOiIyIn19.ROtMTPQiiZAc1yw1_qY59hTgFSpv1_NAZI9s4PUmahw'
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
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