import Head from 'next/head'
import { useSession, signIn, signOut } from 'next-auth/client'


export default function Home() {
  const [ session, loading ] = useSession()
  let message
  if(session) {
    message = <>
      Signed in as {session.user?.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  } else {
    message = <>
      <p>
        Not signed in <br/>
        <button onClick={() => signIn()}>Sign in</button>
      </p>
    </>
  }

  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>

      <main className="container mx-auto">
        <h1>
          This is an H1
        </h1>

        {message}
      </main>
    </>
  )
}
