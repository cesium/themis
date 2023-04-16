import Image from 'next/image'
import { useEffect, useState } from 'react'

export function RenderImage({ org, currentTheme, path }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  switch (currentTheme) {
    case 'dark':
      return (
        <Image
          src={`/images/${path}/${org.logo}`}
          alt={org.name}
          width={120}
          height={150}
        />
      )
    case 'light':
      return (
        <Image
          src={`/images/${path}/${org.logo_light}`}
          alt={org.name}
          width={120}
          height={150}
        />
      )
  }
}
