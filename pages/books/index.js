import Head from 'next/head'
import { gql, useQuery } from '@apollo/client';
import Layout from '../../components/layout'

const query = gql`
query GetBooks {
  books {
    id
    title
  }
}
`

export default function Books() {
  const { data, loading, error } = useQuery(query);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const books = data.books || []

  return (
    <Layout>
      <p>This is the books page with {books.length} books.</p>

      {books.map((books) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
        </div>
      ))}

    </Layout>
  );
}


// export default function Books() {
//   return (
//     <Query
//       query={ query }
//       fetchPolicy={ 'cache-and-network' }
//     >
//       {({ loading, data, error }) => {
//         if(error) {
//           return (<div>Error..</div>);
//         }
//         return (
//           <div>
//             <h1>My Books </h1>
//             <div>
//               {(data ? data.author: []).map((book, i) => (
//                 <div key={i}>
//                   <h2>{book.title}</h2>
//                 </div>
//               ))}
//             </div>
//           </div>
//         );
//       }}
//     </Query>
//   );
// }
