import './globals.css'
import App from 'next/app'
import { Provider } from 'next-auth/client'

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default MyApp
