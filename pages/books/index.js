import Head from 'next/head'
import { gql, useQuery } from '@apollo/client';

const GET_BOOKS = gql`
query GetBooks {
  books {
    id
    title
  }
}
`


export default function Home() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  return (
    <>
      <Head>
        <title>Books</title>
      </Head>

      <main className="container mx-auto">
        <h1>
          Books
        </h1>

        <p>
          This is a paragraph
        </p>
      </main>
    </>
  )
}
