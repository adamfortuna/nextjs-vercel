import Head from 'next/head'
import Layout from '@components/Layout'

export default function Activity() {
  return (
    <Layout>
      <Head>
        <title>Activity</title>
      </Head>

      <main className="container mx-auto">
        <h1>
        Activity
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