import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Blog } from '@/components/Blog'

export default function Paper() {
    return (
      <>
        <Head>
          <title>Jordi</title>
          <meta name="description"/>
        </Head>
        <Header />
        <main>
          <Blog/>
          
        </main>
        <Footer />
      </>
    )
  }