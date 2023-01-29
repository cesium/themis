import Image from 'next/image'

import { Container } from '@/components/Container'
import logoCesium from '@/images/organization/CeSIUM-icon.svg'
import logoELSA from '@/images/organization/ELSA.png'

const organization = [
  { name: 'CeSIUM', logo: logoCesium },
  { name: 'ELSA', logo: logoELSA },
]

export function Organization() {
  return (
    <div className="py-16">
      <Container className="flex flex-col items-center justify-center gap-10">
        <h2 id="speakers-title" className="font-display text-3xl font-medium tracking-tighter text-blue-900">
            Organizadores
        </h2>
        <div className=" flex flex-row items-center gap-16 mx-auto">
          {organization.map((sponsor) => (
            <div key={sponsor.name}>
              <Image className="" src={sponsor.logo} alt={sponsor.name} height={80} unoptimized />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}