import { gql, useQuery } from '@apollo/client';
import Head from 'next/head'
import { getLayout } from "@components/layouts/SingleColContainerLayout"

const query = gql`
query GetBooks {
  books {
    id
    title
    isbn
  }
}
`

const BooksIndex = () => {
  const { data, loading, error } = useQuery(query);
  
  if (loading) {
    return (
      <>
        <h2>Bypass...</h2>
      </>
    )
  }

  if (error) {
    return (
      <>
        <h2>Error...</h2>
        <p>{error}</p>
      </>
    )
  }

  console.log('data', data)

  // return (
  //   <Layout>
  //     <h2>LOADED...</h2>
  //   </Layout>
  // )


  const books = data.books || []

  return (
    <>
      <Head>
        <title>Books</title>
      </Head>

      <main className="container mx-auto">
        <h1>
          Books
        </h1>

        <p>This is the books page with {books.length} books.</p>

        {books.map((book) => (
          <div key={book.id}>
            <h3>{book.title} [{book.isbn}]</h3>
         </div>
        ))}
      </main>
    </>
  )
}

BooksIndex.getLayout = getLayout

export default BooksIndex