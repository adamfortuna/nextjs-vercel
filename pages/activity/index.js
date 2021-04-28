import { gql, useQuery } from '@apollo/client';
import Head from 'next/head'
import Layout from '@components/Layout'

const query = gql`
query GetBooks {
  books {
    id
    title
  }
}
`

function Activity() {

  const { data, loading, error } = useQuery(query);
  
  if (loading) {
    return (
      <Layout>
        <h2>Bypass...</h2>
      </Layout>
    )
  }

  if (error) {
    return (
      <Layout>
        <h2>Error...</h2>
        <p>{error}</p>
      </Layout>
    )
  }

  console.log('data', data)

  const books = data.books || []

  return (
    <Layout>
      <Head>
        <title>Activity</title>
      </Head>

      <main className="container mx-auto">
        <h1>
          Activity
        </h1>

        <p>This is the books page with {books.length} books.</p>

        {books.map((book) => (
          <div key={book.id}>
            <h3>{book.title}</h3>
         </div>
        ))}
      </main>
    </Layout>
  )
}

export default Activity