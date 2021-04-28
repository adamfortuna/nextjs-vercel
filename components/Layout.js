import React from 'react'
import Nav from './Nav'


const Layout = props => (
  <>
    <Nav />

    <main>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">{props.children}</div>
    </main>
  </>
)

export default Layout
