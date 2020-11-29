import React from 'react'
import Head from 'next/head'
import App from 'next/app'

import Nav from '../components/nav'
import Footer from '../components/footer'
import '../css/tailwind.scss'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <title>Exploring Theatre</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </>
    )
  }
}

export default MyApp