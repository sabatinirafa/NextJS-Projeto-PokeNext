import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import Head from 'next/head'

const Layout = ({children}) => {
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='/images/favicon.ico'/>
        <title>Pokenext</title>
      </Head>
      <Navbar/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  )
}

export default Layout