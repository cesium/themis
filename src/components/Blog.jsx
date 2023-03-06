import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from 'public/images/background.jpg'
import writers from '@/data/blog.json'

function PaperStatic() {
  return (
    <div className="flex flex-col mt-20 lg:mx-36 rounded-md">
      {writers.map((paper) => (
        <ol className="space-y-8 bg-white/60 py-14 px-10 text-start shadow-xl shadow-secondary/5 backdrop-blur rounded-2xl mb-6">
          <div className="text-xl font-semibold tracking-tight text-secondary"> {paper.author} </div>
          <div className="mt-1 font-mono text-sm text-slate-500"> {paper.course} </div>
          <div className="mt-1 tracking-tight text-secondary"> {paper.title} </div>
          <div className="text-base text-slate-500"> {paper.text} </div>
        </ol>
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dicta odio temporibus sequi non, ducimus rerum dolor maiores, error tempore dolorem explicabo quas aperiam accusamus dolores aliquam iusto. Ratione, exercitationem.
            </p>
          </div>
        </div>
        <Container className="relative">
          <PaperStatic/>
        </Container>
      </Container>
    </div>
  )
}
