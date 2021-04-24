import Head from 'next/head'
import Nav from '../components/Nav'

export default function Home() {
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
      </main>
    </>
  )
}
