import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'
import { Organization } from '@/components/Organization'
import { Papers } from '@/components/Paper'
import { Team } from '@/components/Team'
import favicon from 'public/favicon.ico'

export default function Home() {
  return (
    <>
      <div className="bg-jordi-black">
        <Head>
          <title>Jordi</title>
          <link rel="icon" href={favicon} />
          <meta name="description" />
        </Head>
        <Header />
        <main>
          <Hero />
          <Speakers />
          <Schedule />
          <Papers />
          <Sponsors />
          <Organization />
          <Team />
        </main>
        <Footer />
      </div>
    </>
  )
}
