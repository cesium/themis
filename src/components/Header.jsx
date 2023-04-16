import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import Logo from 'public/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/outline'

export function Header() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const toggleTheme = () => {
    const newTheme = resolvedTheme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const renderThemeChanger = () => {
    if (!mounted) return null
    const currentTheme = resolvedTheme

    return currentTheme === 'dark' ? (
      <SunIcon
        className="mt-8 ml-5 h-14 w-14 cursor-pointer items-center justify-center rounded-2xl bg-jordi-orange-500 p-1 text-jordi-beige hover:bg-jordi-orange-400 sm:mt-0 sm:ml-5"
        onClick={() => toggleTheme()}
      />
    ) : (
      <MoonIcon
        className="mt-8 ml-5 h-14 w-14 cursor-pointer items-center justify-center rounded-2xl bg-jordi-orange-500 p-1 text-jordi-beige hover:bg-jordi-orange-400 sm:mt-0 sm:ml-5"
        onClick={() => toggleTheme()}
      />
    )
  }

  return (
    <header className="relative z-50 pb-11 lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <Link href="/" className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Image
            className="mr-5 h-12 w-auto text-slate-900 lg:mr-0"
            src={Logo}
            alt="JORDI"
            width={50}
            height={25}
            priority
            unoptimized
          />
        </Link>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-black/10 py-4 font-mono text-sm text-jordi-orange-500 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4">
            <p>
              <time dateTime="2022-04-04">17</time>-
              <time dateTime="2022-04-06">19 de Abril, 2023</time>
            </p>
            <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
            <p>Universidade do Minho</p>
          </div>
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button
            href="https://docs.google.com/forms/d/e/1FAIpQLSdfQGGp45c_luUpHSBMgXgZwvfN7OXsDrj08gmzj_kRKQdHQA/viewform"
            className="bg-jordi-orange-500 text-jordi-beige hover:bg-jordi-orange-400"
          >
            Inscreve-te
          </Button>
        </div>
        {renderThemeChanger()}
      </Container>
    </header>
  )
}
