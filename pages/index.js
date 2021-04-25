import Head from 'next/head'
import Nav from '../components/Nav'
import { useUser } from '@auth0/nextjs-auth0';


export default function Home() {
  const { user, error, isLoading } = useUser();
  console.log('user', user)

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <main className="container mx-auto">
        <h1>
          This is an H1
        </h1>

        <p>
          This is a paragraph
        </p>

        <p>Loading: {isLoading}</p>
        <p>Error: {error}</p>
        <p>User: {user.name}</p>

        <p>
          <a href="/api/auth/login">Login</a>
        </p>
      </main>
    </>
  )
}
