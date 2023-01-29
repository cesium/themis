import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'
import { Organization } from '@/components/Organization'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jordi</title>
        <meta name="description"/>
      </Head>
      <Header />
      <main>
        <Hero />
        <Speakers />
        <Schedule />
        <Sponsors />
        <Organization />
      </main>
      <Footer />
    </>
  )
}
