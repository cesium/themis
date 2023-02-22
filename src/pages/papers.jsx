import Head from 'next/head'
import Image from 'next/image'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Sponsors } from '@/components/Sponsors'
import { Organization } from '@/components/Organization'
import { Form } from '@/components/Form'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'
import { Logo } from '@/components/Logo'
import { DiamondIcon } from '@/components/DiamondIcon'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jordi</title>
        <meta name="description"/>
      </Head>
      <header className="relative z-50 pb-11 lg:pt-11">
        <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
          <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
            <Logo className="h-12 w-auto text-slate-900" />
          </div>
          <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-primary/10 py-4 font-mono text-sm text-primary sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
            <div className="mx-auto flex items-center gap-4 px-4">
              <p>
                <time dateTime="2022-04-04">04</time>-
                <time dateTime="2022-04-06">06 of April, 2022</time>
              </p>
              <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
              <p>Universidade do Minho</p>
            </div>
          </div>
          <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
            <Button href="./">Página Inicial</Button>
          </div>
        </Container>
      </header>
      <main>
      <div className="relative pt-10 pb-20 sm:py-24">
        <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden bg-indigo-50">
          <Image
            className="absolute top-0 left-0 translate-y-[-10%] translate-x-[-55%] -scale-x-100 sm:left-1/2 sm:translate-y-[-6%] sm:translate-x-[-98%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
            src={backgroundImage}
            alt=""
            width={918}
            height={1495}
            priority
            unoptimized
          />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
        </div>
        <Container className="relative">
          <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
            <h1 className="font-display text-5xl font-bold tracking-tighter text-primary sm:text-7xl">
              <span className="sr-only">Jordi </span>Submissão de Papers
            </h1>
            <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-secondary">
              <p>
                At DeceptiConf you’ll learn about the latest dark patterns being
                developed to trick even the smartest visitors, and you’ll learn
                how to deploy them without ever being detected.
              </p>
            </div>
        </div>
      </Container>
    </div>
        <Form />
        <Sponsors />
        <Organization />
      </main>
      <Footer />
    </>
  )
}
