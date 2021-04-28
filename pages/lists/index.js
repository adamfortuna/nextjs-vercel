import Head from 'next/head'
import { getLayout } from "@components/layouts/SingleColContainerLayout"

const ListsIndex = () => {
  return (
    <>
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
    </>
  )
}


ListsIndex.getLayout = getLayout

export default ListsIndex
