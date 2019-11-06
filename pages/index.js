import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Main from '../components/main'

const Home = () => (
  <div className="homepage">
    <Head>
      <title>Homepage</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <div className="content">
      <Nav />
      <Main />
    </div>

    <style jsx global>{`
      body {
        font-family: Verdana;
      }

      .homepage {
        padding: 3.5em 2em 2em 2em;
      }
      
      .content {
        width: 70vw;
        margin: 0 auto;
      }
    `}</style>
  </div>
)

export default Home
