// Dependencies
import React from 'react'
import Head from 'next/head'

// components
import Login from './login'

// Styles
import styles from './Layout.scss'

const Layout = () => {
  <>
    <Head>
      <title>Login</title>
      <meta name="title" content="Login"></meta>
    </Head>

    <Login />
  </>
}

export default Layout
