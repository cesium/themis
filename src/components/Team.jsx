import { useEffect, useId, useState, Fragment } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'

import teams from '@/data/team.json'

function ImageClipPaths({ id, ...props }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Team() {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')
  const [selectedIndex, setSelectedIndex] = useState(0)

  function handleSelectNextIndex() {
    setSelectedIndex((prevState) =>
      prevState < teams.length - 1 ? prevState + 1 : prevState,
    )
  }

  function handleSelectPrevIndex() {
    setSelectedIndex((prevState) => (prevState > 0 ? prevState - 1 : prevState))
  }

  function handleSelectIndex(index) {
    setSelectedIndex(index)
  }

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section id="team" aria-labelledby="team-title" className="py-20">
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="team-title"
            className="font-display text-4xl font-medium tracking-tighter text-jordi-orange-600 sm:text-5xl"
          >
            Equipa
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-white">
            A coleção mais aleatória de nerds e chatos que gostam de debater
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-14 grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
          selectedIndex={selectedIndex}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute bottom-0 top-2 left-0.5 hidden w-px bg-slate-200 lg:block" />
            {/* MOBILE TABLIST DATE PICKER */}
            <Tab.List className="flex md:hidden">
              {teams.map((team, index) => (
                <Tab key={index} as="div" className="outline-transparent">
                  {selectedIndex === index && (
                    <div className="flex w-screen items-center justify-between px-4">
                      <button
                        className="px-4 font-mono text-4xl text-jordi-orange-600"
                        onClick={handleSelectPrevIndex}
                      >
                        &lt;
                      </button>

                      <div className="-mt-2 text-center font-mono text-xl text-jordi-purple-300">
                        {team.name}
                      </div>

                      <button
                        className="px-4 font-mono text-4xl text-jordi-orange-600"
                        onClick={handleSelectNextIndex}
                      >
                        &gt;
                      </button>
                    </div>
                  )}
                </Tab>
              ))}
            </Tab.List>

            {/* NORMAL TABLIST DATE PICKER */}
            <Tab.List className="hidden auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 md:grid lg:grid lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) =>
                teams.map((team, index) => (
                  <div
                    key={team.name}
                    className="relative hidden md:block lg:block lg:pl-8"
                    onClick={() => handleSelectIndex(index)}
                  >
                    <DiamondIcon
                      className={clsx(
                        'absolute top-[0.5625rem] left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block',
                        index === selectedIndex
                          ? 'fill-jordi-purple-400 stroke-jordi-purple-400'
                          : 'fill-transparent stroke-jordi-purple-200',
                      )}
                    />
                    <div className="relative">
                      <div
                        className={clsx(
                          'hidden font-mono text-sm sm:flex',
                          index === selectedIndex
                            ? 'text-jordi-purple-400'
                            : 'text-jordi-purple-200',
                        )}
                      >
                        <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                          <span className="absolute inset-0" />
                          {team.name}
                        </Tab>
                      </div>
                    </div>
                  </div>
                ))
              }
            </Tab.List>
          </div>
          <Tab.Panels className="lg:col-span-3">
            {teams.map((team) => (
              <Tab.Panel
                key={team.name}
                className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 [&:not(:focus-visible)]:focus:outline-none"
                unmount={false}
              >
                {team.members.map((member, index) => (
                  <div key={index}>
                    <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                      <div
                        className={clsx(
                          'absolute top-0 left-0 right-4 bottom-6 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                          [
                            'border-jordi-purple-300',
                            'border-jordi-orange-600',
                            'border-jordi-purple-200',
                          ][index % 3],
                        )}
                      />
                      <div
                        className="absolute inset-0 bg-indigo-50"
                        style={{ clipPath: `url(#${id}-${index % 3})` }}
                      >
                        <Image
                          className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                          src={`/images/avatars/${member.image}`}
                          alt=""
                          priority
                          sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                          width={560}
                          height={560}
                        />
                      </div>
                    </div>
                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-jordi-purple-200">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-base tracking-tight text-white">
                      {member.role}
                    </p>
                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Container>
    </section>
  )
}
