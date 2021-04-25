import Head from 'next/head'
import Layout from '../components/Layout'
import { useUser } from '@auth0/nextjs-auth0';


export default function Home() {
  const { user, error, isLoading } = useUser();
  console.log('user', user)
  let message

  if (isLoading) {
    message = <div>Loading...</div>
  }
  if (error) {
    message = <div>{error.message}</div>
  }
  if (!user) {
    message = <a href="/api/auth/login">Login</a>
  }
  else {
    message = <a href="/api/auth/logout">Logout {user.name}</a>
  }

  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      </Head>

      <main className="container mx-auto">
        <h1>
          This is an H1
        </h1>

        {message}
      </main>
    </Layout>
  )
}
