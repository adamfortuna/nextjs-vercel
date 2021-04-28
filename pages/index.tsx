import Head from 'next/head'
import { getLayout } from "@components/layouts/SingleColContainerLayout"

const HomeIndex = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>

      <h1>
        This is an H1
      </h1>
    </>
  )
}

HomeIndex.getLayout = getLayout

export default HomeIndex
