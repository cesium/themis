import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from 'public/images/themis.png'
import hero from '@/data/hero.json'

export function Hero() {
  return (
    <div className="relative pt-10 pb-20 sm:py-24">
      <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden bg-jordi-black">
        <Image
          className="absolute opacity-80 top-0 left-0 translate-y-[-10%] translate-x-[-55%] blur-lg sm:left-1/2 sm:translate-y-[-2%] sm:translate-x-[-98%] lg:translate-x-[-106%] xl:translate-x-[-105%]"
          src={backgroundImage}
          alt=""
          width={1500}
          height={1495}
          priority
          unoptimized
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-jordi-black" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-jordi-orange-600 sm:text-7xl">
            <span className="sr-only">Jordi </span>Jornadas de Direito
            Informático
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-white">
            <p>
              <i>With great technology comes great responsibility!</i>
            </p>
            <p>
              A necessidade de melhores soluções decorrentes dos crescentes
              problemas legais no nosso mundo, cada vez mais tecnológico, não
              para de aumentar. A JORDI - Jornadas do Direito Informático -
              propõe-se a debater alguns dos aspetos mais fascinantes desta área
              cada vez mais importante.
            </p>
            <p>
              Dos dias 17 a 19 de abril de 2023, poderás explorar os mais
              diversos temas, desde blockchain a IA, passando por crimes
              informáticos e proteção de dados, open-source, entre outros.
            </p>
          </div>
          <Button
            href="#"
            className="mt-10 w-full bg-jordi-orange-700 text-white hover:bg-jordi-orange-600 sm:hidden"
          >
            Inscreve-te
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-y-6 gap-x-10 sm:mt-16 sm:gap-y-10 sm:gap-x-16 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {hero.map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-jordi-orange-600">
                  {name}
                </dt>
                <dd className="mt-0.5 text-base font-semibold tracking-tight text-white sm:text-2xl">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
