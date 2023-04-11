import Image from 'next/image'
import { useTheme } from 'next-themes'

import { Container } from '@/components/Container'
import sponsors from '@/data/sponsors.json'

export function Sponsors() {
  const { theme } = useTheme()

  return (
    <section
      id="sponsors"
      aria-label="Sponsors"
      className="bg-jordi-beige-100 py-20 dark:bg-black sm:py-32"
    >
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-jordi-orange-500 sm:text-5xl">
          Exclusive Sponsorship
        </h2>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-y-12 gap-x-32 md:gap-x-16 lg:gap-x-32">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <Image
                src={`/images/logos/${
                  theme === 'dark'
                    ? sponsor.logo
                    : sponsor.logo_light ?? sponsor.logo
                }`}
                alt={sponsor.name}
                height={120}
                width={150}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
