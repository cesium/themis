import { Container } from '@/components/Container'
import Logo from 'public/images/logo.svg'
import Engenharia from 'public/images/engenharia.png'
import Direito from 'public/images/direito.jpg'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-white py-16 dark:bg-jordi-black">
      <Container className="flex flex-row items-center justify-between md:flex-row">
        <Image
          className="h-12 w-auto text-slate-900"
          src={Logo}
          alt=""
          width={50}
          height={25}
          priority
          unoptimized
        />
        <div className="flex flex-col gap-5">
          <h5 className="font-display text-xl font-medium tracking-tighter text-jordi-orange-500">
            {' '}
            Parceiros:
          </h5>
          <div className="flx-row flex gap-5">
            <Image
              className="h-14 w-auto text-slate-900 opacity-70 hover:opacity-100"
              src={Engenharia}
              alt=""
              width={75}
              height={50}
              priority
              unoptimized
            />
            <Image
              className="h-14 w-auto text-slate-900 opacity-70 hover:opacity-100"
              src={Direito}
              alt=""
              width={50}
              height={50}
              priority
              unoptimized
            />
          </div>
        </div>
      </Container>
    </footer>
  )
}
