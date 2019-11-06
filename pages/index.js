import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
  <div className="homepage">
    <Head>
      <title>Homepage</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <div className="main">
      <Nav />
    </div>

    <style jsx global>{`
      body {
        font-family: Verdana;
      }

      .homepage {
        padding: 3.5em 2em 2em 2em;
      }
      
      .main {
        width: 70vw;
        margin: 0 auto;
      }
    `}</style>
  </div>
)

export default Home
