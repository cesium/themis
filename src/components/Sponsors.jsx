import Image from 'next/image'

import { Container } from '@/components/Container'
import sponsors from '@/data/sponsors.json'

export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-secondary sm:text-5xl">
          Sponsorships
        </h2>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-y-12 gap-x-32 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <Image src={`/images/logos/${sponsor.logo}`} alt={sponsor.name} height={70} width={120}/>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
