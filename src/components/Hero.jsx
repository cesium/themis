import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from 'public/images/themisOut.svg'
import hero from '@/data/hero.json'

import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export function Hero() {
  return (
    <div className="relative pt-10 pb-20 sm:py-24">
      <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden bg-white dark:bg-jordi-black">
        <Image
          className="absolute top-0 left-0 translate-y-[-2%] translate-x-[10%] opacity-75 blur-sm sm:left-1/2 sm:translate-y-[-30%] sm:translate-x-[-47%] sm:blur-md lg:translate-y-[-62%] lg:translate-x-[-50%] xl:translate-x-[-55%]"
          src={backgroundImage}
          alt=""
          width={10000}
          height={1495}
          priority
          unoptimized
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white dark:from-black" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-jordi-beige-100 dark:from-black" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-jordi-orange-500 sm:text-7xl">
            <span className="sr-only">Jordi </span>Jornadas de Direito e
            Informática
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-black dark:text-white">
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
            className="mt-10 w-full bg-jordi-orange-500 text-jordi-beige hover:bg-jordi-orange-400 sm:hidden"
          >
            Inscreve-te
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-y-6 gap-x-10 sm:mt-16 sm:gap-y-10 sm:gap-x-16 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {hero.map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-jordi-orange-400">
                  {name}
                </dt>
                <dd className="mt-0.5 text-base font-semibold tracking-tight text-black dark:text-white sm:text-2xl">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-16">
            <h5 className="text-2xl font-bold tracking-tight text-jordi-orange-500">
              Sigam-nos :
            </h5>
            <div className="mt-4 flex flex-row justify-start text-black dark:text-jordi-beige">
              <a
                className="mr-5 w-5 hover:opacity-50"
                href="https://github.com/cesium/themis"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                className="mr-5 w-5 hover:opacity-50"
                href="https://www.instagram.com/jordiuminho"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                className="mr-5 w-5 hover:opacity-50"
                href="https://www.instagram.com/jordiuminho"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                className="mr-5 w-5 hover:opacity-50"
                href="mailto:jornadasdtoinf@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
