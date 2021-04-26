import Head from 'next/head'
import Layout from '@components/Layout'


export default function Home() {

  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      </Head>

      <main className="container mx-auto">
        <h1>
          This is an H1
        </h1>
      </main>
    </Layout>
  )
}
