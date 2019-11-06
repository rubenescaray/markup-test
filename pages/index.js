import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Main from '../components/main'
import Cards from '../components/cards'
import HowDoesItWork from '../components/how-does-it-work'
import Footer from '../components/footer'

const Home = () => (
  <div className="homepage">
    <Head>
      <title>Homepage</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <div className="content">
      <Nav />
      <Main />
      <Cards />
      <HowDoesItWork />
      <hr style={{backgroundColor: 'gray', height: '1px', border: '0'}} />
      <Footer />
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
