import Image from 'next/image'

import Link from 'next/link'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import backgroundImage from 'public/images/logoOrange.png'

function ArrowRightIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="m14 7 5 5-5 5M19 12H5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Papers() {
  return (
    <section
      id="papers"
      aria-label="Papers"
      className="bg-jordi-black py-20 px-4 sm:py-32"
    >
      <Container>
        <div className="relative -mx-4 overflow-hidden rounded-xl bg-black/60 py-20 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-36">
          <Image
            className="absolute left-1/2 top-0 translate-x-[15%] translate-y-[10%] opacity-90 blur-md lg:translate-x-[-45%] lg:translate-y-[-2%]"
            src={backgroundImage}
            alt=""
            width={500}
            height={1351}
            unoptimized
          />
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="font-display text-4xl font-medium tracking-tighter text-jordi-orange-500 sm:text-5xl">
                Call for Papers
              </p>
              <p className="mt-4 text-lg tracking-tight text-jordi-beige">
                Tens interesse em Direito Informático? Gostas de escrever?
                Habilita-te a ganhar prémios incríveis, inclusive a oportunidade
                de apresentar o teu paper aos participantes da JORDI!
              </p>
            </div>
            <div className="flex flex-col items-center gap-10">
              <form>
                <h3 className="inline-block text-lg font-semibold tracking-tight text-jordi-orange-500 sm:block">
                  Submete o Paper aqui{' '}
                  <span className="hidden sm:inline-flex" aria-hidden="true">
                    &darr;
                  </span>
                </h3>
                <Button
                  type="submit"
                  className="ml-5 mt-2 bg-jordi-orange-500 text-white sm:ml-24"
                  href="/"
                >
                  <span className="sr-only sm:not-sr-only">Submissão</span>
                  <span className="sm:hidden">
                    <ArrowRightIcon className="h-6 w-6" />
                  </span>
                </Button>
              </form>
              <div className="mt-16 flex flex-col">
                <h1 className="text-base font-semibold tracking-tighter text-jordi-beige-900">
                  Mais informações{' '}
                  <span className="hidden sm:inline-flex" aria-hidden="true">
                    &darr;
                  </span>
                </h1>
                <div className="flex flex-row items-center gap-3 text-jordi-beige">
                  <Link
                    passHref
                    className="font-mono text-sm tracking-tighter underline hover:no-underline"
                    href="/"
                  >
                    Regulamentação
                  </Link>
                  <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
                  <Link
                    passHref
                    className="font-mono text-sm tracking-tighter underline hover:no-underline"
                    href="/"
                  >
                    Template
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
