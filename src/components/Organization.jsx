import Image from 'next/image'

import { Container } from '@/components/Container'
import logoCesium from '@/images/organization/CeSIUM-icon.svg'
import logoELSA from '@/images/organization/ELSA.png'

const organizers = [
  { name: 'CeSIUM', logo: logoCesium , site: 'https://cesium.di.uminho.pt/'},
  { name: 'ELSA', logo: logoELSA , site: '/'},
]

export function Organization() {
  return (
    <div className="py-16">
      <Container className="flex flex-col items-center justify-center gap-10">
        <h2 id="speakers-title" className="font-display text-3xl font-medium tracking-tighter text-blue-900">
            Organizadores
        </h2>
        <div className=" flex flex-row items-center gap-16 mx-auto">
          {organizers.map((organization) => (
            <div key={organization.name}>
              <a href={organization.site}><Image className="hover:opacity-80" src={organization.logo} alt={organization.name} height={80} unoptimized /></a>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}