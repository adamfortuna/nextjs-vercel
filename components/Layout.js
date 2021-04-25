import React from 'react'
import Head from 'next/head'
import Nav from './Nav'


const Layout = props => (
  <>
    <Head>
      <title>Untitled Book Site</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Head>

    <Nav />

    <main>
      <div className="container mx-auto">{props.children}</div>
    </main>
  </>
)

export default Layout
