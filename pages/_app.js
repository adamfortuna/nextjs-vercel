import '../styles/globals.css'
import Nav from '../components/Nav'

// import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { UserProvider } from '@auth0/nextjs-auth0';


const client = new ApolloClient({
  uri: `https://${process.env.NEXT_PUBLIC_API_HOST}`,
  cache: new InMemoryCache()
});




function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <Nav />
        <Component {...pageProps} />
      </UserProvider>
    </ApolloProvider>
  )
}

export default MyApp
