import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import Logo from 'public/images/logoA.svg'
import Image from 'next/image'


export function Header() {
  return (
    <header className="relative z-50 pb-11 lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <a href="/" className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Image
            className="h-12 w-auto text-slate-900"
            src={Logo}
            alt="JORDI"
            width={50}
            height={25}
            priority
            unoptimized
          />
        </a>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-primary/10 py-4 font-mono text-sm text-primary sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4">
            <p>
              <time dateTime="2022-04-04">17</time>-
              <time dateTime="2022-04-06">19 de Abril, 2023</time>
            </p>
            <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
            <p>Universidade do Minho</p>
          </div>
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button href="#">Inscreve-te</Button>
        </div>
      </Container>
    </header>
  )
}
