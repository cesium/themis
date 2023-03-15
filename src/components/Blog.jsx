import Image from 'next/image'

import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import React, { useState } from 'react'
import backgroundImage from 'public/images/background.jpg'
import writers from '@/data/blog.json'

function ShowPaper({ paper }) {
  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen(!open)
  }

  return (
    <div className="mb-6 space-y-8 rounded-2xl bg-white/60 py-14 px-10 text-start shadow-xl shadow-secondary/5 backdrop-blur">
      <p className="text-xl font-semibold tracking-tight text-secondary">
        {paper.author}
      </p>
      <p className="mt-1 font-mono text-sm text-slate-500">{paper.course}</p>
      <p className="mt-1 tracking-tight text-secondary">{paper.title}</p>
      <p className={`text-base ${open ? 'text-slate-700' : 'hidden'}`}>
        {paper.text}
      </p>
      <p className={`text-base ${open ? 'hidden' : 'text-slate-500'}`}>
        {paper.summary}
      </p>
      <Button className="mx-[40%]" onClick={handleToggle}>
        {open ? 'Mostrar menos' : 'Mostrar mais'}
      </Button>
    </div>
  )
}

function PaperStatic() {
  return (
    <div className="mt-20 flex flex-col rounded-md lg:mx-36">
      {writers.map((paper) => (
        <ShowPaper paper={paper} key={paper.id} />
      ))}
    </div>
  )
}

export function Blog() {
  return (
    <div className="relative pt-10 pb-20 sm:py-5">
      <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden bg-indigo-50">
        <Image
          className="absolute top-0 left-0 translate-y-[-10%] translate-x-[-55%] -scale-x-100 sm:left-1/2 sm:translate-y-[-6%] sm:translate-x-[-98%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
          src={backgroundImage}
          alt=""
          width={918}
          height={1495}
          priority
          unoptimized
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-primary sm:text-7xl">
            <span className="sr-only">Papers </span>Papers
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-secondary">
            <p>
              Chegaram ao fim as Jornadas do Direito Informático! Foram três
              dias de novo conhecimento, tecnologias
              <i>cutting-edge</i> e uma das áreas emergentes mais fascinantes da
              atualidade! Parabéns aos vencedores e um muito obrigado por
              explorarem connosco e descobrirem mais da simbiose entre Direito e
              Informática. Por um futuro mais justo e mais tecnológico e por uma
              evolução mais inteligente e sempre mutável!
            </p>
          </div>
        </div>
        <Container className="relative">
          <PaperStatic />
        </Container>
      </Container>
    </div>
  )
}
