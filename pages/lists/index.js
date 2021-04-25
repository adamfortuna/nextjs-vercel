import Head from 'next/head'
import Layout from '@components/Layout'

export default function Lists() {
  return (
    <Layout>
      <Head>
        <title>Lists</title>
      </Head>

      <main className="container mx-auto">
        <h1>
          Lists
        </h1>

        <p>
          This is a paragraph
        </p>
      </main>
    </Layout>
  )
}
