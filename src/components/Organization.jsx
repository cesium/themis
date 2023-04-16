import { useTheme } from 'next-themes'
import { useEffect } from 'react'
import { Container } from '@/components/Container'
import organizers from '@/data/organization.json'
import { current } from 'tailwindcss/colors'
import { RenderImage } from '@/components/RenderImage'

export function Organization() {
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')

    if (storedTheme) {
      setTheme(storedTheme)
    }
  })

  return (
    <div className="bg-gradient-to-b from-jordi-beige-100 py-16 dark:from-black">
      <Container className="flex flex-col items-center justify-center gap-10">
        <h2
          id="speakers-title"
          className="font-display text-3xl font-medium tracking-tighter text-jordi-orange-500"
        >
          Organizadores
        </h2>
        <div className="mx-auto flex flex-row items-center gap-16">
          {organizers.map((organization) => (
            <div key={organization.name}>
              <a href={organization.site}>
                <RenderImage
                  org={organization}
                  currentTheme={resolvedTheme}
                  path={'organization'}
                />
              </a>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
