import { Container } from '@/components/Container'
import Logo from 'public/images/logo.svg'
import Image from 'next/image'
import footer from '@/data/footer.json'

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
            {footer.map((sponsor) => (
              <div
                key={sponsor.name}
                className="flex items-center justify-center opacity-70 hover:opacity-100"
              >
                <Image
                  src={`/images/${sponsor.logo}`}
                  alt={sponsor.name}
                  height={75}
                  width={100}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
