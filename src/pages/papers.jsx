import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Blog } from '@/components/Blog'

export default function Paper() {
  return (
    <>
      <div className="bg-jordi-black">
        <Head>
          <title>Jordi</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" />
        </Head>
        <Header />
        <main>
          <Blog />
        </main>
        <Footer />
      </div>
    </>
  )
}
