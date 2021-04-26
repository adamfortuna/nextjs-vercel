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

export default function Books() {
  return (
    <Layout>
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
    </Layout>
  )

  // const { data, loading, error } = useQuery(query);

  // if (loading) {
  //   return <h2>Loading...</h2>;
  // }

  // if (error) {
  //   console.error(error);
  //   return null;
  // }

  // const books = data.books || []

  // return (
  //   <Layout>
  //     <p>This is the books page with {books.length} books.</p>

  //     {books.map((books) => (
  //       <div key={book.id}>
  //         <h3>{book.title}</h3>
  //       </div>
  //     ))}

  //   </Layout>
  // );
}