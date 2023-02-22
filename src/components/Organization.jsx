import Image from 'next/image'

import { Container } from '@/components/Container'
import organizers from '@/data/organization.json'


export function Organization() {
  return (
    <div className="py-16">
      <Container className="flex flex-col items-center justify-center gap-10">
        <h2 id="speakers-title" className="font-display text-3xl font-medium tracking-tighter text-secondary">
            Organizadores
        </h2>
        <div className=" flex flex-row items-center gap-16 mx-auto">
          {organizers.map((organization) => (
            <div key={organization.name}>
              <a href={organization.site}><Image className="hover:opacity-80" src={`/images/organization/${organization.logo}`} alt={organization.name} height={80} width={85}/></a>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}