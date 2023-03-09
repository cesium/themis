import Image from 'next/image'

import Link from 'next/link'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import backgroundImage from 'public/images/background-newsletter.jpg'

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
    <section id="papers" aria-label="Papers">
      <Container>
        <div className="relative -mx-4 overflow-hidden bg-indigo-50 py-20 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-36">
          <Image
            className="absolute left-1/2 top-0 translate-x-[-10%] translate-y-[-45%] lg:translate-x-[-32%]"
            src={backgroundImage}
            alt=""
            width={919}
            height={1351}
            unoptimized
          />
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
                Call for Papers
              </p>
              <p className="mt-4 text-lg tracking-tight text-blue-900">
                Tens interesse em Direito Informático? Gostas de escrever?
                Habilita-te a ganhar prémios incríveis, inclusive a oportunidade
                de apresentar o teu paper aos participantes da JORDI!
              </p>
            </div>
            <div className="ml-36 flex-col gap-10">
              <form>
                <h3 className="text-lg font-semibold tracking-tight text-blue-900">
                  Submete o Paper aqui{' '}
                  <span className="hidden sm:inline-flex" aria-hidden="true">
                    &darr;
                  </span>
                </h3>
                <Button type="submit" className="ml-20 mt-2 sm:ml-24" href="/">
                  <span className="sr-only sm:not-sr-only">Submissão</span>
                  <span className="sm:hidden">
                    <ArrowRightIcon className="h-6 w-6" />
                  </span>
                </Button>
              </form>
              <div className="flex flex-row mt-16 items-center gap-3">
                <Link className="font-mono text-xs tracking-tighter text-slate-600" href="/">Regulamentação</Link>
                <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
                <Link className="font-mono text-xs tracking-tighter text-slate-600" href="/">Template</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
