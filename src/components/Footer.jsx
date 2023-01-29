import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="py-16">
      <Container className="flex flex-col items-center justify-center md:flex-row">
        <Logo className="h-12 w-auto text-slate-900" />
      </Container>
    </footer>
  )
}
