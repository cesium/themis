import { Container } from '@/components/Container'
import Logo from 'public/images/logo.svg'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-white py-16">
      <Container className="flex flex-col items-center justify-center md:flex-row">
        <Image
          className="h-12 w-auto text-slate-900"
          src={Logo}
          alt=""
          width={50}
          height={25}
          priority
          unoptimized
        />
      </Container>
    </footer>
  )
}
