import Image from 'next/image'

import { Container } from '@/components/Container'
import organizers from '@/data/organization.json'

export function Organization() {
  return (
    <div className="bg-white py-16">
      <Container className="flex flex-col items-center justify-center gap-10">
        <h2
          id="speakers-title"
          className="font-display text-3xl font-medium tracking-tighter text-jordi-orange-500"
        >
          Organizadores
        </h2>
        <div className=" mx-auto flex flex-row items-center gap-16">
          {organizers.map((organization) => (
            <div key={organization.name}>
              <a href={organization.site}>
                <Image
                  className="hover:opacity-80"
                  src={`/images/organization/${organization.logo}`}
                  alt={organization.name}
                  height={80}
                  width={125}
                />
              </a>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
