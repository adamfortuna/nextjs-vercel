import { gql, useQuery } from "@apollo/client";
import Head from 'next/head'
import Layout from '@components/Layout'
// import { useSession} from 'next-auth/client'

const FIND_USER = gql`
  query FindUser {
    users(where: {id: {_eq: 1}}) {
      id
      email
      image
      name
      username
    }
  }
`

export default function Account() {
  const { loading, error, data } = useQuery(FIND_USER);

  if (loading) return <Layout><p>Loading...</p></Layout>;
  if (error) return <Layout><p>Error :(</p></Layout>;
  
  const user = data.users[0]

  return (
    <Layout>
      <Head>
        <title>Account</title>
      </Head>

      <main className="container mx-auto">
        <h1>
          Account Page
        </h1>

        <ul>
          <li>ID: {user.id}</li>
          <li>Email: {user.email}</li>
          <li>Name: {user.name}</li>
          <li>Image: {user.image}</li>
          <li>Username: {user.username}</li>
        </ul>
      </main>
    </Layout>
  )
}
