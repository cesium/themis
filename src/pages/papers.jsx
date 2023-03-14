import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Blog } from '@/components/Blog'
import favicon from 'public/favicon.ico'

export default function Paper() {
  return (
    <>
      <Head>
        <title>Jordi</title>
        <link rel="icon" href={favicon} />
        <meta name="description" />
      </Head>
      <Header />
      <main>
        <Blog />
      </main>
      <Footer />
    </>
  )
}
